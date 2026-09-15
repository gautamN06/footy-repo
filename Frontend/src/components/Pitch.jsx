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


const canPlayPosition = (player, position) => {

    if (player.position === position) {
        return true;
    }

    const compatiblePositions = {

        CF: ["ST"],

        AM: ["CM", "AM"],

        CM: ["CM", "AM", "DM"],

        DM: ["DM", "CM"],

        LW: ["LW", "LM"],

        RW: ["RW", "RM"],

        LM: ["LM", "LW"],

        RM: ["RM", "RW"],

        ST: ["ST", "CF"]
    };

    return compatiblePositions[player.position]?.includes(position);
};


function Pitch({ formation, lineup, onAddPlayer }) {

    const [players, setPlayers] = useState(
        formations[formation]
    );


    useEffect(() => {
        setPlayers(formations[formation]);
    }, [formation]);

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    const handleDrop = (event) => {
        event.preventDefault();

        const playerId = Number(
            event.dataTransfer.getData("playerId")
        );

    const player = lineup.find(
        player => player.id === playerId
        );

    if (player) {
        return;
    }

        onAddPlayer(playerId);
    };

    const handleDrag = (event, index) => {

        const pitch = event.currentTarget.parentElement;
        const rect = pitch.getBoundingClientRect();

        let x =
            ((event.clientX - rect.left) / rect.width) * 100;

        let y =
            ((event.clientY - rect.top) / rect.height) * 100;

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
     * Reset the formation positions.
     */
    const resetFormation = () => {
        setPlayers(formations[formation]);
    };


    const assignedPlayers = [];
    const usedPlayers = new Set();

    players.forEach(slot => {

        const matchingPlayer = lineup.find(player =>
            !usedPlayers.has(player.id) &&
            canPlayPosition(player, slot.position)
        );

        if (matchingPlayer) {
            usedPlayers.add(matchingPlayer.id);
        }

        assignedPlayers.push(matchingPlayer || null);
    });


    return (
        <section className="pitch-area">

            <div className="pitch-header">

                <div>
                    <span>ARSENAL</span>
                    <strong>{formation}</strong>
                </div>

                <div className="pitch-controls">

                    <span className="pitch-status">
                        {lineup.length} / 11 PLAYERS
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


                {players.map((player, index) => {

                    const selectedPlayer = assignedPlayers[index];

                    return (
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

                            {selectedPlayer ? (

                                <div className="pitch-player-card">

                                    <div className="pitch-player-number">
                                        {selectedPlayer.shirtNumber}
                                    </div>

                                    <div className="pitch-player-info">

                                        <strong>
                                            {selectedPlayer.name}
                                        </strong>

                                        <span>
                                            {selectedPlayer.position}
                                        </span>

                                    </div>

                                </div>

                            ) : (

                                <div className="empty-position">
                                    {player.position}
                                </div>

                            )}

                        </div>
                    );

                })}

            </div>

        </section>
    );
}

export default Pitch;