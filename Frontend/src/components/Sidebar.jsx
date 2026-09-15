function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h3>Matches</h3>

                <button className="sidebar-item active">
                    Today's Matches
                </button>

                <button className="sidebar-item">
                    Upcoming
                </button>

                <button className="sidebar-item">
                    Results
                </button>
            </div>

            <div className="sidebar-section">
                <h3>My Teams</h3>

                <button className="sidebar-item">
                    Liverpool
                </button>

                <button className="sidebar-item">
                    Barcelona
                </button>

                <button className="sidebar-item">
                    + Add Team
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;

