function Pitch({ formation }) {

    return (
        <section className="pitch-area">

            <div className="pitch-header">
                <div>
                    <span>ARSENAL</span>
                    <strong>{formation}</strong>
                </div>

                <span className="pitch-status">
                    0 / 11 PLAYERS
                </span>
            </div>

            <div className="pitch">

                <div className="penalty-box top">
                    <div className="goal"></div>
                </div>

                <div className="center-circle"></div>

                <div className="penalty-box bottom">
                    <div className="goal"></div>
                </div>

                <div className="pitch-player player-gk">
                    <div className="player-marker">
                        GK
                    </div>
                    <span>GK</span>
                </div>

                <div className="pitch-player player-lb">
                    <div className="player-marker">
                        LB
                    </div>
                    <span>LB</span>
                </div>

                <div className="pitch-player player-lcb">
                    <div className="player-marker">
                        CB
                    </div>
                    <span>CB</span>
                </div>

                <div className="pitch-player player-rcb">
                    <div className="player-marker">
                        CB
                    </div>
                    <span>CB</span>
                </div>

                <div className="pitch-player player-rb">
                    <div className="player-marker">
                        RB
                    </div>
                    <span>RB</span>
                </div>

                <div className="pitch-player player-lcm">
                    <div className="player-marker">
                        CM
                    </div>
                    <span>CM</span>
                </div>

                <div className="pitch-player player-cm">
                    <div className="player-marker">
                        CM
                    </div>
                    <span>CM</span>
                </div>

                <div className="pitch-player player-rcm">
                    <div className="player-marker">
                        CM
                    </div>
                    <span>CM</span>
                </div>

                <div className="pitch-player player-lw">
                    <div className="player-marker">
                        LW
                    </div>
                    <span>LW</span>
                </div>

                <div className="pitch-player player-st">
                    <div className="player-marker">
                        ST
                    </div>
                    <span>ST</span>
                </div>

                <div className="pitch-player player-rw">
                    <div className="player-marker">
                        RW
                    </div>
                    <span>RW</span>
                </div>

            </div>

        </section>
    );
}

export default Pitch;