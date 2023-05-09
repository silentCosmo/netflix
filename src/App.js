import { Outlet } from "react-router-dom";
import "./App.css"
import NavBar from './Components/NavBar/NavBar';
import Footer from "./Components/Footer/Footer";


function App() {
  //const Layout = <> <NavBar/> <div className="pages"><Outlet/></div><Footer/></>
  return (
    <div className="App">
      <NavBar/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
