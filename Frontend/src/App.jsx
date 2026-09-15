
import { useEffect, useState } from "react";
import Squad from "./components/Squad";
import Pitch from "./components/Pitch";
import FormationSelector from "./components/FormationSelector";
import "./App.css";

function App() {
    const [team, setTeam] = useState("Arsenal");
    const [squad, setSquad] = useState([]);
    const [formation, setFormation] = useState("4-3-3");

    const [lineup, setLineup] = useState([]);

    /*
     * Load the selected team's squad.
     */
    useEffect(() => {
        fetch(`http://localhost:5219/players?team=${team}&pageSize=100`)
            .then(response => response.json())
            .then(data => {
                setSquad(data.players);
                setLineup([]);
            })
            .catch(error => {
                console.error("Failed to fetch squad:", error);
            });
    }, [team]);


    const addPlayerToLineup = (player) => {

        // Don't add the same player twice.
        if (lineup.some(p => p.id === player.id)) {
            return;
        }

        // Maximum of 11 players.
        if (lineup.length >= 11) {
            return;
        }

        setLineup(current => [
            ...current,
            {
                ...player,
                x: null,
                y: null
            }
        ]);
    };

    const updatePlayerPosition = (playerId, x, y) => {

        if (x === null || y === null) {
            setLineup(current =>
                current.filter(player => player.id !== playerId)
            );

            return;
        }

        setLineup(current =>
            current.map(player =>
                player.id === playerId
                    ? { ...player, x, y }
                    : player
            )
        );
    };


    const removePlayerFromLineup = (playerId) => {
        setLineup(current =>
            current.filter(player => player.id !== playerId)
        );
    };


    const resetLineup = () => {
        setLineup([]);
    };


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

                        <span>
                            TEAM
                        </span>

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
                    lineup={lineup}
                    onAddPlayer={addPlayerToLineup}
                    onRemovePlayer={removePlayerFromLineup}
                />


                <Pitch
                    formation={formation}
                    lineup={lineup}
                    squad={squad}
                    onAddPlayer={addPlayerToLineup}
                    onUpdatePlayerPosition={updatePlayerPosition}
                    onReset={resetLineup}
                />

            </main>

        </div>
    );
}

export default App;

