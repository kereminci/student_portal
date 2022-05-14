import "./App.css";

import Slider from './components/slider/Slider';
import Main from './components/main/Main';
import Footer from "./components/footer/Footer";
import Navbar from './components/navb/Navbar';
import Etk from "./components/etkinlikler/Etk";
import Bolum from "./components/bolum/Bolum"

function App() {
  return (
   <div className="App">
     
     <Navbar></Navbar>
      <Slider></Slider>   
      <br/><br/>
      <Main></Main>
      <h1 className="h1font mt-3">ETKİNLİKLER</h1>
        <div className="album">
          <div className="container">
          <hr className="border-2 border-top border-primary w-100 "></hr>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col"><Etk></Etk></div>
              <div className="col"><Etk></Etk></div>
              <div className="col"><Etk></Etk></div>
            </div>
          </div>
        </div>
        <br /> <br />
      <Footer></Footer> 
      
      

    </div>
    
    
  );
}

export default App;
