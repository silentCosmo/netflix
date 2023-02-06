import { Outlet } from "react-router-dom";
import "./App.css"
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <div className="pages">
        <Outlet/>
      </div>

    </div>
  );
}

export default App;
