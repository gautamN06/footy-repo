function PlayerCard({ player }) {

    return (
        <div className="player-card">

            <div className="player-number">
                {String(player.shirtNumber).padStart(2, "0")}
            </div>

            <div className="player-info">

                <strong>
                    {player.name}
                </strong>

                <span>
                    {player.position || "—"}
                    {" • "}
                    {player.nationality || "Unknown"}
                </span>

            </div>

            <div className="player-arrow">
                →
            </div>

        </div>
    );
}

export default PlayerCard;