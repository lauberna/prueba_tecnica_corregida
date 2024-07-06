import TimeLine from "./components/TimeLine";
import Header from "./components/Header";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="home">
        <TimeLine />
        <Notes />
      </div>
    </div>
  );
}

export default App;
