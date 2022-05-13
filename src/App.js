import "./App.css";
//import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import Navbar from './components/navb/Navbar';
//import Button from "react-bootstrap/Button";
import Main from './components/main/Main';
import Etk from './components/etkinlikler/Etk';
import Login3 from "./components/login/Login3";


function App() {
  return (
    <div className="App">
     
      <Navbar></Navbar>
      <Slider></Slider>   
      <br/><br/> <br/>
      <br/> 
      <Main></Main>
      
    </div>
  );
}

export default App;
