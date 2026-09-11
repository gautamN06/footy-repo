using Backend.Models;

namespace Backend.Data;

public static class DbSeeder
{
    public static void Seed(FootballDbContext db)
    {
        if (db.Players.Any())
        {
            return;
        }

        var players = new List<Player>
        {
            // =========================
            // ARSENAL
            // =========================

            new Player
            {
                Name = "David Raya",
                Team = "Arsenal",
                Position = "GK",
                Age = 30,
                Nationality = "Spain",
                ShirtNumber = 1
            },

            new Player
            {
                Name = "Kepa Arrizabalaga",
                Team = "Arsenal",
                Position = "GK",
                Age = 31,
                Nationality = "Spain",
                ShirtNumber = 13
            },

            new Player
            {
                Name = "Illan Meslier",
                Team = "Arsenal",
                Position = "GK",
                Age = 26,
                Nationality = "France",
                ShirtNumber = 30
            },

            new Player
            {
                Name = "William Saliba",
                Team = "Arsenal",
                Position = "CB",
                Age = 25,
                Nationality = "France",
                ShirtNumber = 2
            },

            new Player
            {
                Name = "Cristhian Mosquera",
                Team = "Arsenal",
                Position = "CB",
                Age = 22,
                Nationality = "Spain",
                ShirtNumber = 3
            },

            new Player
            {
                Name = "Ben White",
                Team = "Arsenal",
                Position = "RB",
                Age = 28,
                Nationality = "England",
                ShirtNumber = 4
            },

            new Player
            {
                Name = "Piero Hincapié",
                Team = "Arsenal",
                Position = "CB",
                Age = 24,
                Nationality = "Ecuador",
                ShirtNumber = 5
            },

            new Player
            {
                Name = "Gabriel Magalhães",
                Team = "Arsenal",
                Position = "CB",
                Age = 28,
                Nationality = "Brazil",
                ShirtNumber = 6
            },

            new Player
            {
                Name = "Jurriën Timber",
                Team = "Arsenal",
                Position = "RB",
                Age = 25,
                Nationality = "Netherlands",
                ShirtNumber = 12
            },

            new Player
            {
                Name = "Ezri Konsa",
                Team = "Arsenal",
                Position = "CB",
                Age = 28,
                Nationality = "England",
                ShirtNumber = 15
            },

            new Player
            {
                Name = "Riccardo Calafiori",
                Team = "Arsenal",
                Position = "LB",
                Age = 24,
                Nationality = "Italy",
                ShirtNumber = 33
            },

            new Player
            {
                Name = "Myles Lewis-Skelly",
                Team = "Arsenal",
                Position = "LB",
                Age = 19,
                Nationality = "England",
                ShirtNumber = 49
            },

            new Player
            {
                Name = "Martin Ødegaard",
                Team = "Arsenal",
                Position = "AM",
                Age = 27,
                Nationality = "Norway",
                ShirtNumber = 8
            },

            new Player
            {
                Name = "Eberechi Eze",
                Team = "Arsenal",
                Position = "AM",
                Age = 28,
                Nationality = "England",
                ShirtNumber = 10
            },

            new Player
            {
                Name = "Mikel Merino",
                Team = "Arsenal",
                Position = "CM",
                Age = 30,
                Nationality = "Spain",
                ShirtNumber = 23
            },

            new Player
            {
                Name = "Martin Zubimendi",
                Team = "Arsenal",
                Position = "DM",
                Age = 27,
                Nationality = "Spain",
                ShirtNumber = 36
            },

            new Player
            {
                Name = "Bruno Guimarães",
                Team = "Arsenal",
                Position = "CM",
                Age = 28,
                Nationality = "Brazil",
                ShirtNumber = 39
            },

            new Player
            {
                Name = "Declan Rice",
                Team = "Arsenal",
                Position = "DM",
                Age = 27,
                Nationality = "England",
                ShirtNumber = 41
            },

            new Player
            {
                Name = "Max Dowman",
                Team = "Arsenal",
                Position = "AM",
                Age = 16,
                Nationality = "England",
                ShirtNumber = 56
            },

            new Player
            {
                Name = "Bukayo Saka",
                Team = "Arsenal",
                Position = "RW",
                Age = 25,
                Nationality = "England",
                ShirtNumber = 7
            },

            new Player
            {
                Name = "Gabriel Jesus",
                Team = "Arsenal",
                Position = "ST",
                Age = 29,
                Nationality = "Brazil",
                ShirtNumber = 9
            },

            new Player
            {
                Name = "Gabriel Martinelli",
                Team = "Arsenal",
                Position = "LW",
                Age = 25,
                Nationality = "Brazil",
                ShirtNumber = 11
            },

            new Player
            {
                Name = "Viktor Gyökeres",
                Team = "Arsenal",
                Position = "ST",
                Age = 28,
                Nationality = "Sweden",
                ShirtNumber = 14
            },

            new Player
            {
                Name = "Christos Tzolis",
                Team = "Arsenal",
                Position = "LW",
                Age = 24,
                Nationality = "Greece",
                ShirtNumber = 17
            },

            new Player
            {
                Name = "Noni Madueke",
                Team = "Arsenal",
                Position = "RW",
                Age = 24,
                Nationality = "England",
                ShirtNumber = 20
            },

            new Player
            {
                Name = "Kai Havertz",
                Team = "Arsenal",
                Position = "ST",
                Age = 27,
                Nationality = "Germany",
                ShirtNumber = 29
            },


            // =========================
            // LIVERPOOL
            // =========================

            new Player
            {
                Name = "Alisson Becker",
                Team = "Liverpool",
                Position = "GK",
                Age = 33,
                Nationality = "Brazil",
                ShirtNumber = 1
            },

            new Player
            {
                Name = "Giorgi Mamardashvili",
                Team = "Liverpool",
                Position = "GK",
                Age = 25,
                Nationality = "Georgia",
                ShirtNumber = 25
            },

            new Player
            {
                Name = "Freddie Woodman",
                Team = "Liverpool",
                Position = "GK",
                Age = 29,
                Nationality = "England",
                ShirtNumber = 28
            },

            new Player
            {
                Name = "Vítězslav Jaroš",
                Team = "Liverpool",
                Position = "GK",
                Age = 25,
                Nationality = "Czech Republic",
                ShirtNumber = 56
            },

            new Player
            {
                Name = "Joe Gomez",
                Team = "Liverpool",
                Position = "CB",
                Age = 29,
                Nationality = "England",
                ShirtNumber = 2
            },

            new Player
            {
                Name = "Virgil van Dijk",
                Team = "Liverpool",
                Position = "CB",
                Age = 35,
                Nationality = "Netherlands",
                ShirtNumber = 4
            },

            new Player
            {
                Name = "Jérémy Jacquet",
                Team = "Liverpool",
                Position = "CB",
                Age = 21,
                Nationality = "France",
                ShirtNumber = 5
            },

            new Player
            {
                Name = "Milos Kerkez",
                Team = "Liverpool",
                Position = "LB",
                Age = 22,
                Nationality = "Hungary",
                ShirtNumber = 6
            },

            new Player
            {
                Name = "Conor Bradley",
                Team = "Liverpool",
                Position = "RB",
                Age = 23,
                Nationality = "Northern Ireland",
                ShirtNumber = 12
            },

            new Player
            {
                Name = "Giovanni Leoni",
                Team = "Liverpool",
                Position = "CB",
                Age = 19,
                Nationality = "Italy",
                ShirtNumber = 15
            },

            new Player
            {
                Name = "Kostas Tsimikas",
                Team = "Liverpool",
                Position = "LB",
                Age = 30,
                Nationality = "Greece",
                ShirtNumber = 21
            },

            new Player
            {
                Name = "Jeremie Frimpong",
                Team = "Liverpool",
                Position = "RB",
                Age = 25,
                Nationality = "Netherlands",
                ShirtNumber = 30
            },

            new Player
            {
                Name = "Ronald Araújo",
                Team = "Liverpool",
                Position = "CB",
                Age = 27,
                Nationality = "Uruguay",
                ShirtNumber = 33
            },

            new Player
            {
                Name = "Luke Chambers",
                Team = "Liverpool",
                Position = "LB",
                Age = 22,
                Nationality = "England",
                ShirtNumber = 44
            },

            new Player
            {
                Name = "Isaac Mabaya",
                Team = "Liverpool",
                Position = "RB",
                Age = 21,
                Nationality = "England",
                ShirtNumber = 52
            },

            new Player
            {
                Name = "Florian Wirtz",
                Team = "Liverpool",
                Position = "AM",
                Age = 23,
                Nationality = "Germany",
                ShirtNumber = 7
            },

            new Player
            {
                Name = "Dominik Szoboszlai",
                Team = "Liverpool",
                Position = "AM",
                Age = 25,
                Nationality = "Hungary",
                ShirtNumber = 8
            },

            new Player
            {
                Name = "Alexis Mac Allister",
                Team = "Liverpool",
                Position = "CM",
                Age = 27,
                Nationality = "Argentina",
                ShirtNumber = 10
            },

            new Player
            {
                Name = "Ryan Gravenberch",
                Team = "Liverpool",
                Position = "CM",
                Age = 24,
                Nationality = "Netherlands",
                ShirtNumber = 38
            },

            new Player
            {
                Name = "James McConnell",
                Team = "Liverpool",
                Position = "CM",
                Age = 21,
                Nationality = "England",
                ShirtNumber = 53
            },

            new Player
            {
                Name = "Wataru Endo",
                Team = "Liverpool",
                Position = "DM",
                Age = 33,
                Nationality = "Japan",
                ShirtNumber = 3
            },

            new Player
            {
                Name = "Alexander Isak",
                Team = "Liverpool",
                Position = "ST",
                Age = 26,
                Nationality = "Sweden",
                ShirtNumber = 9
            },

            new Player
            {
                Name = "Cody Gakpo",
                Team = "Liverpool",
                Position = "LW",
                Age = 27,
                Nationality = "Netherlands",
                ShirtNumber = 18
            },

            new Player
            {
                Name = "Hugo Ekitiké",
                Team = "Liverpool",
                Position = "ST",
                Age = 24,
                Nationality = "France",
                ShirtNumber = 22
            },

            new Player
            {
                Name = "Bradley Barcola",
                Team = "Liverpool",
                Position = "LW",
                Age = 24,
                Nationality = "France",
                ShirtNumber = 29
            },

            new Player
            {
                Name = "Federico Chiesa",
                Team = "Liverpool",
                Position = "RW",
                Age = 28,
                Nationality = "Italy",
                ShirtNumber = 14
            }
        };

        db.Players.AddRange(players);
        db.SaveChanges();
    }
}