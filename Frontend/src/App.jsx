import { useEffect, useState } from "react";
import Squad from "./components/Squad";
import Pitch from "./components/Pitch";
import FormationSelector from "./components/FormationSelector";
import "./App.css";

function App() {

    const [team, setTeam] = useState("Arsenal");
    const [squad, setSquad] = useState([]);
    const [formation, setFormation] = useState("4-3-3");

    useEffect(() => {

        fetch(`http://localhost:5219/players?team=${team}`)
            .then(response => response.json())
            .then(data => {
                setSquad(data.players);
            })
            .catch(error => {
                console.error("Failed to fetch squad:", error);
            });

    }, [team]);

    return (
        <div className="app">

            <header className="topbar">

                <div className="logo">
                    FOOTY<span>.</span>
                </div>

                <nav>
                    <button className="nav-active">
                        LINEUP
                    </button>

                    <button>
                        SQUAD
                    </button>

                    <button>
                        SAVED XI
                    </button>
                </nav>

            </header>


            <div className="page-header">

                <div>
                    <p className="eyebrow">
                        TACTICAL BOARD
                    </p>

                    <h1>
                        Build your XI
                    </h1>
                </div>


                <div className="builder-controls">

                    <div className="team-control">

                        <span>TEAM</span>

                        <select
                            value={team}
                            onChange={(event) =>
                                setTeam(event.target.value)
                            }
                        >
                            <option value="Arsenal">
                                Arsenal
                            </option>

                            <option value="Liverpool">
                                Liverpool
                            </option>
                        </select>

                    </div>


                    <FormationSelector
                        formation={formation}
                        setFormation={setFormation}
                    />

                </div>

            </div>


            <main className="builder">

                <Squad
                    squad={squad}
                    team={team}
                />

                <Pitch
                    formation={formation}
                    team={team}
                />

            </main>

        </div>
    );
}

export default App;