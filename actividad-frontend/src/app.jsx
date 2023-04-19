import { Header } from "./components/header";
import { Placeholder } from "./components/placeholder";
import { Filter } from "./components/Ranking/Filter";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="summary">
          {/* TODO: Exercise 2 - Create the summary component */}
          <Placeholder />
        </div>
        <div className="ranking">
          {/* TODO: Exercise 3 - Create the ranking component */}
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
