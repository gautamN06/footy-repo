import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";


function App() {
    return (
        <div className="app">
            <NavigationBar />

            <div className="app-body">
                <Sidebar />

                <main className="main-content">
                    <h1>Liverpool Match Center</h1>
                    <p>Live Scores and Fixtures for Liverpool</p>
                </main>
            </div>
        </div>
    );
}

export default App;