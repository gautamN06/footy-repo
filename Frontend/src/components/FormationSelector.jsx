function FormationSelector({ formation, setFormation }) {
    return (
        <div className="formation-selector">
            <span>FORMATION</span>

            <select
                value={formation}
                onChange={(event) => setFormation(event.target.value)}
            >
                <option value="4-3-3">4-3-3</option>
                <option value="4-2-3-1">4-2-3-1</option>
                <option value="4-4-2">4-4-2</option>
            </select>
        </div>
    );
}

export default FormationSelector;