namespace Backend.Models; 

public class Player
{
    public int Id {get; set; }
    public string Name {get; set; } = "";
    public string Team {get; set; } = ""; 
    public string Position {get; set; } = "";
    public int Age {get; set; }
    public string Nationality {get; set; } = "";

}