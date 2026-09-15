function NavigationBar() {
    return (
        <header className="navbar">
            <div className="logo">Liverpool</div>

            <nav className="nav-links">
                <button className="nav-link active">Matches</button>
                <button className="nav-link">Teams</button>
            </nav>

            <div className="nav-right">
                <span className="live-indicator">LIVE</span>
            </div>
        </header>
    );
}

export default NavigationBar;