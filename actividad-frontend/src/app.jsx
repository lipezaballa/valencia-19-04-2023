import { Header } from "./components/header";
import { Placeholder } from "./components/placeholder";
import { Filter } from "./components/Ranking/Filter";
import { Ranking } from "./components/Ranking/ranking";
import "./app.css";
import { Summary } from "./components/summary/summary";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="summary">
          <Summary />
        </div>
        <div className="ranking">
          {/* TODO: Exercise 3 - Create the ranking component */}
          <Filter />
          <Ranking></Ranking>
        </div>
      </div>
    </div>
  );
}

export default App;
