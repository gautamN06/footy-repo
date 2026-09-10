import PlayerCard from "./PlayerCard";

function Squad({ squad }) {

    const goalkeepers = squad.filter(
        player => player.position === "GK"
    );

    const defenders = squad.filter(
        player => ["CB", "LB", "RB"].includes(player.position)
    );

    const midfielders = squad.filter(
        player => ["DM", "CM", "AM"].includes(player.position)
    );

    const forwards = squad.filter(
        player => ["LW", "RW", "ST", "CF"].includes(player.position)
    );

    return (
        <aside className="squad-panel">

            <div className="squad-heading">
                <div>
                    <p className="eyebrow">ARSENAL</p>
                    <h2>Squad</h2>
                </div>

                <span className="player-count">
                    {squad.length}
                </span>
            </div>

            <div className="squad-section">
                <h3>GOALKEEPERS</h3>

                {goalkeepers.map(player => (
                    <PlayerCard
                        key={player.id}
                        player={player}
                    />
                ))}
            </div>

            <div className="squad-section">
                <h3>DEFENDERS</h3>

                {defenders.map(player => (
                    <PlayerCard
                        key={player.id}
                        player={player}
                    />
                ))}
            </div>

            <div className="squad-section">
                <h3>MIDFIELDERS</h3>

                {midfielders.map(player => (
                    <PlayerCard
                        key={player.id}
                        player={player}
                    />
                ))}
            </div>

            <div className="squad-section">
                <h3>FORWARDS</h3>

                {forwards.map(player => (
                    <PlayerCard
                        key={player.id}
                        player={player}
                    />
                ))}
            </div>

        </aside>
    );
}

export default Squad;