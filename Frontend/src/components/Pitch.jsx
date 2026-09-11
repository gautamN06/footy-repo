import { useEffect, useState } from "react";

const formations = {
    "4-3-3": [
        { position: "GK", x: 50, y: 88 },

        { position: "LB", x: 15, y: 68 },
        { position: "CB", x: 38, y: 72 },
        { position: "CB", x: 62, y: 72 },
        { position: "RB", x: 85, y: 68 },

        { position: "CM", x: 30, y: 52 },
        { position: "CM", x: 50, y: 57 },
        { position: "CM", x: 70, y: 52 },

        { position: "LW", x: 15, y: 27 },
        { position: "ST", x: 50, y: 20 },
        { position: "RW", x: 85, y: 27 }
    ],

    "4-4-2": [
        { position: "GK", x: 50, y: 88 },

        { position: "LB", x: 15, y: 68 },
        { position: "CB", x: 38, y: 72 },
        { position: "CB", x: 62, y: 72 },
        { position: "RB", x: 85, y: 68 },

        { position: "LM", x: 12, y: 48 },
        { position: "CM", x: 38, y: 52 },
        { position: "CM", x: 62, y: 52 },
        { position: "RM", x: 88, y: 48 },

        { position: "ST", x: 42, y: 22 },
        { position: "ST", x: 58, y: 22 }
    ],

    "4-2-3-1": [
        { position: "GK", x: 50, y: 88 },

        { position: "LB", x: 15, y: 68 },
        { position: "CB", x: 38, y: 72 },
        { position: "CB", x: 62, y: 72 },
        { position: "RB", x: 85, y: 68 },

        { position: "DM", x: 38, y: 56 },
        { position: "DM", x: 62, y: 56 },

        { position: "LW", x: 15, y: 35 },
        { position: "AM", x: 50, y: 36 },
        { position: "RW", x: 85, y: 35 },

        { position: "ST", x: 50, y: 18 }
    ]
};

function Pitch({ formation }) {

    const [players, setPlayers] = useState(
        formations[formation]
    );

    /*
     * Whenever the formation changes,
     * load that formation's default positions.
     */
    useEffect(() => {
        setPlayers(formations[formation]);
    }, [formation]);

    /*
     * Move a player when the user drags them.
     */
    const handleDrag = (event, index) => {

        const pitch = event.currentTarget.parentElement;
        const rect = pitch.getBoundingClientRect();

        let x = ((event.clientX - rect.left) / rect.width) * 100;
        let y = ((event.clientY - rect.top) / rect.height) * 100;

        /*
         * Keep players inside the pitch.
         */
        x = Math.max(5, Math.min(95, x));
        y = Math.max(5, Math.min(95, y));

        setPlayers(currentPlayers =>
            currentPlayers.map((player, i) =>
                i === index
                    ? { ...player, x, y }
                    : player
            )
        );
    };

    /*
     * Reset the players to the default formation.
     */
    const resetFormation = () => {
        setPlayers(formations[formation]);
    };

    return (
        <section className="pitch-area">

            <div className="pitch-header">

                <div>
                    <span>ARSENAL</span>
                    <strong>{formation}</strong>
                </div>

                <div className="pitch-controls">

                    <span className="pitch-status">
                        {players.length} / 11 PLAYERS
                    </span>

                    <button
                        className="reset-button"
                        onClick={resetFormation}
                    >
                        RESET
                    </button>

                </div>

            </div>

            <div className="pitch">

                <div className="penalty-box top">
                    <div className="goal"></div>
                </div>

                <div className="center-circle"></div>

                <div className="penalty-box bottom">
                    <div className="goal"></div>
                </div>

                {players.map((player, index) => (

                    <div
                        key={index}
                        className="pitch-player"
                        draggable
                        onDragEnd={(event) =>
                            handleDrag(event, index)
                        }
                        style={{
                            left: `${player.x}%`,
                            top: `${player.y}%`
                        }}
                    >

                        <div className="player-marker">
                            {player.position}
                        </div>

                        <span>
                            {player.position}
                        </span>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Pitch;