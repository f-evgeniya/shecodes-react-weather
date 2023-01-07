import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London"/>
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
            href="https://app.netlify.com/sites/delightful-lebkuchen-7d8bbd/deploys"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </div>
    </div>
  );
}
