import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by
          <span className="accent"> Anita Peña-Tomczak</span> and it's
          open-sourced
          <a
            href="https://github.com/Moldee81/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
