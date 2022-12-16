import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";

function App() {
  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />
      <div className="background"></div>
    </div>
  );
}

export default App;
