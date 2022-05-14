import "./App.css";
//import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import Nav2 from './components/nav2/Nav2';
//import Button from "react-bootstrap/Button";
import Main from './components/main/Main';
import Footer from "./components/footer/Footer";
import Navbar from './components/navb/Navbar';

function App() {
  return (
    <div className="App">
     
     <Navbar></Navbar>
      <Slider></Slider>   
      <br/><br/> <br/>
      <Main></Main>
      <br/><br/>
      <Footer></Footer>
    </div>
  );
}

export default App;
