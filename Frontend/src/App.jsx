import { useEffect, useState } from "react";
import Squad from "./components/Squad";
import Pitch from "./components/Pitch";
import FormationSelector from "./components/FormationSelector";
import "./App.css";

function App() {
    const [squad, setSquad] = useState([]);
    const [formation, setFormation] = useState("4-3-3");

    useEffect(() => {
        fetch("http://localhost:5219/players?team=Arsenal")
            .then(response => response.json())
            .then(data => {
                setSquad(data.players);
            })
            .catch(error => {
                console.error("Failed to fetch squad:", error);
            });
    }, []);

    return (
        <div className="app">

            <header className="topbar">
                <div className="logo">
                    FOOTY<span>.</span>
                </div>

                <nav>
                    <button className="nav-active">LINEUP</button>
                    <button>SQUAD</button>
                    <button>SAVED XI</button>
                </nav>

                <div className="team-name">
                    ARSENAL
                </div>
            </header>

            <div className="page-header">
                <div>
                    <p className="eyebrow">TACTICAL BOARD</p>
                    <h1>Build your XI</h1>
                </div>

                <FormationSelector
                    formation={formation}
                    setFormation={setFormation}
                />
            </div>

            <main className="builder">

                <Squad squad={squad} />

                <Pitch formation={formation} />

            </main>

        </div>
    );
}

export default App;