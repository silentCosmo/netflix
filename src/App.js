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
      
      <div className="footer">
      <div className="social">
        <a href="https://github.com/silentCosmo/">
        <i class="fa-brands fa-github soci"></i>
        </a>
        <a href="https://www.instagram.com/silentcosmo_/?hl=en">
        <i class="fa-brands fa-instagram soci"></i>
        </a>
        <a href="https://www.linkedin.com/in/silentcosmo/">
        <i class="fa-brands fa-linkedin soci"></i>
        </a>
      </div>
      
      <div className="bottom">
        
        <p className="ftext"> &#169;2023  SilentCosmo </p>
      </div>
      </div>

    </div>
  );
}

export default App;
