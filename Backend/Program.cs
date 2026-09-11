using Backend.Models; 
using Backend.Data; 
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.RazorPages;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var password = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD");

connectionString += $";Password={password}";

builder.Services.AddDbContext<FootballDbContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<FootballDbContext>();

    DbSeeder.Seed(db);
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

//GET METHODS
app.MapGet("/players", async (
    int? page,
    int? pageSize,
    string? team,
    string? position, 
    FootballDbContext db) =>
{
    int currentPage = page ?? 1;
    int currentPageSize = pageSize ?? 20; 

    if(currentPage < 1)
    {
        return Results.BadRequest("There must at least be 1 on this page.");
    }

    if (currentPageSize < 1 || currentPageSize > 100)
    {
        return Results.BadRequest("Page size must be between 1 and 100.");
    }
    
    var query = db.Players.AsQueryable();

    if(!string.IsNullOrWhiteSpace(team))
    {
        query = query.Where(p => p.Team == team);
    }

    if(!string.IsNullOrWhiteSpace(position))
    {
        query = query.Where(p=>p.Position == position);
    }

    var totalPlayers = await query.CountAsync();

    var players = await query
        .Skip((currentPage-1)*currentPageSize)
        .Take(currentPageSize)
        .ToListAsync();
    
    return Results.Ok(new
    {
       page = currentPage,
       pageSize = currentPageSize,
       totalPlayers, 
       players 
    });
});

app.MapGet("/players/search", async (string name, FootballDbContext db) =>
{
    var players = await db.Players 
        .Where(p => EF.Functions.ILike(p.Name, $"%{name}"))
        .ToListAsync();   

    return Results.Ok(players);
});

app.MapGet("/players/{id}", async (int id, FootballDbContext db) =>
{
    var player = await db.Players.FindAsync(id);

    if (player == null)
    {
        return Results.NotFound();
    }

    return Results.Ok(player);

});


//POST METHODS
app.MapPost("/players", async (Player player, FootballDbContext db) =>
{
    db.Players.Add(player);
    await db.SaveChangesAsync();

    return Results.Created($"/players/{player.Id}", player);
});

//PUT METHODS
app.MapPut("/players/{id}", async (int id, Player updatedPlayer, FootballDbContext db) =>
{
    var player = await db.Players.FindAsync(id);

    if(player == null)
    {
        return Results.NotFound();
    }

    player.Name = updatedPlayer.Name;
    player.Team = updatedPlayer.Team;

    await db.SaveChangesAsync();

    return Results.Ok(player);

});

//DELETE METHOD
app.MapDelete("/players/{id}", async (int id, FootballDbContext db) =>
{
    var player = await db.Players.FindAsync(id);

    if (player == null)
    {
        return Results.NotFound();
    }

    db.Players.Remove(player);
    await db.SaveChangesAsync();

    return Results.NoContent();
    
});

app.Run();