import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import "./App.css";

function App() {
  const { user, setUser, theme, setTheme } = useContext(GlobalContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <div className="card">
        <h1>Hello, {user} 👋</h1>

        <div className="buttons">
          <button onClick={() => setUser("Rakshit")}>
            Set User Name
          </button>

          <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
