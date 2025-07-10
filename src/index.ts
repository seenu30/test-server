import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded player data
const players = {
  cricket: [
    { name: "Virat Kohli", country: "India", desc: "Consistent run-scorer and modern legend." },
    { name: "Steve Smith", country: "Australia", desc: "Technically brilliant batsman." },
    { name: "Joe Root", country: "England", desc: "Backbone of England's batting." },
    { name: "Babar Azam", country: "Pakistan", desc: "Stylish and dependable." },
    { name: "Kane Williamson", country: "New Zealand", desc: "Elegant leader and batsman." }
  ],
  basketball: [
    { name: "LeBron James", country: "USA", desc: "All-time great and versatile player." },
    { name: "Stephen Curry", country: "USA", desc: "Changed the game with 3-point shooting." },
    { name: "Kevin Durant", country: "USA", desc: "Elite scorer with finesse." },
    { name: "Giannis Antetokounmpo", country: "Greece", desc: "Dominant inside and out." },
    { name: "Nikola Jokić", country: "Serbia", desc: "Unique all-around big man." }
  ],
  football: [
    { name: "Lionel Messi", country: "Argentina", desc: "Magician with the ball." },
    { name: "Cristiano Ronaldo", country: "Portugal", desc: "Goal machine and athlete." },
    { name: "Kylian Mbappé", country: "France", desc: "Pace and precision." },
    { name: "Kevin De Bruyne", country: "Belgium", desc: "Midfield maestro." },
    { name: "Erling Haaland", country: "Norway", desc: "Future of goal-scoring." }
  ],
  baseball: [
    { name: "Shohei Ohtani", country: "Japan", desc: "Elite pitcher and batter." },
    { name: "Aaron Judge", country: "USA", desc: "Powerful slugger." },
    { name: "Mookie Betts", country: "USA", desc: "Complete outfielder." },
    { name: "Ronald Acuña Jr.", country: "Venezuela", desc: "Dynamic and fast." },
    { name: "Mike Trout", country: "USA", desc: "Consistent all-star." }
  ]
};

// Routes
app.get("/api/cricket", (req, res) => res.json(players.cricket));
app.get("/api/basketball", (req, res) => res.json(players.basketball));
app.get("/api/football", (req, res) => res.json(players.football));
app.get("/api/baseball", (req, res) => res.json(players.baseball));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
