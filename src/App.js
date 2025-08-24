import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>React weather app </h1>
      <footer>
        This project was coded by
        <span className="accent"> Anita Peña-Tomczak</span> and it's
        open-sourced
        <a href="" target="_blank" rel="noopener noreferrer">
          {" "}
          on GitHub.
        </a>
      </footer>
    </div>
  );
}
