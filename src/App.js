import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Starfield from "./components/StarField";

function App() {
  return (
    <div className="App">
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <NavBar></NavBar>
    </div>
  );
}

export default App;
