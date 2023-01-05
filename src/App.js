import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container">
      <Weather />
      <p>
        Created by{" "}
        <a
          href="https://www.shecodes.io/graduates/54185-evgeniya-firsova"
          target="_blank"
          rel="noopener noreferrer"
        >
          Evgeniya Firsova
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/f-evgeniya/shecodes-react-weather"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://app.nelify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
