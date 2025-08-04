import "./styles/App.css";
import "./styles/index.css";

function App() {
  const localHost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const BaseURL = localHost
    ? "http://localhost:5000"
    : "http://192.168.1.103:5000";
  return <div className="app"></div>;
}

export default App;
