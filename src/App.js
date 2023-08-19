import logo from "./logo.svg";
import "./App.css";
import LayoutComponent from "./components/organisms/layout";
import { BrowserRouter } from "react-router-dom";
import Mainpage from "./components/pages/mainPage";

function App() {
  return (
    <div className="App">
      <Mainpage />
    </div>
  );
}

export default App;
