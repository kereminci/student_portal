import React from 'react'
import Navbar from '../components/navb/Navbar';
import Slider from '../components/slider/Slider';
import Etk from '../components/etkinlik/Etk';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import { Link } from "react-router-dom";

const Anasayfa = () => {
  return (
    <div>
      


      <Slider></Slider>   
      <br/><br/>
      <Main></Main>
      <Link to="/etkinlikler"><h1 className="h1font mt-3">ETKİNLİKLER</h1></Link>-
        <div className="album">
          <div className="container">
          <hr className="border-2 border-top border-primary w-100 "></hr>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Link to="/etkinlikler"><div className="col"><Etk></Etk></div> </Link>
            <Link to="/etkinlikler"><div className="col"><Etk></Etk></div> </Link>
            <Link to="/etkinlikler"><div className="col"><Etk></Etk></div> </Link> 
            </div>
          </div>
        </div>
        <br /> <br />
    </div>
  )
}

export default Anasayfa

