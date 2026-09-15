function PlayerCard({ player, onAdd, onRemove, selected }) {

    const handleClick = () => {
        if (selected) {
            onRemove(player.id);
        } else {
            onAdd(player);
        }
    };

    const handleDragStart = (event) => {
        event.dataTransfer.setData(
            "playerId",
            String(player.id)
        );
    };

    return (
        <div
            className={`player-card ${selected ? "selected" : ""}`}
            onClick={handleClick}
            draggable
            onDragStart={handleDragStart}
        >
            <div className="player-number">
                {String(player.shirtNumber).padStart(2, "0")}
            </div>

            <div className="player-info">
                <strong>{player.name}</strong>

                <span>
                    {player.position || "—"}
                    {" • "}
                    {player.nationality || "Unknown"}
                </span>
            </div>

            <div className="player-arrow">
                {selected ? "✓" : "→"}
            </div>
        </div>
    );
}

export default PlayerCard;