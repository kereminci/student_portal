import React from 'react'

import Sorular from '../sorular/Sorular';
//import Navbar from './components/navbar/Navbar';
import Slider from '../slider/Slider';
import Navbar from '../navb/Navbar';
//import Button from "react-bootstrap/Button";
import Etk from '../etkinlikler/Etk';
import Footer from "../footer/Footer";



function App() {
  return (
    <div className="App">
     
     <Navbar></Navbar>
      <Slider></Slider>   
      <br/><br/> <br/> <br/>
      
     
      <h1 className="h1font mt-5 fw-bold">İÜC BİLGİSAYAR MÜHENDİSLİĞİ</h1>
      
        
        <div className="album">
        
          <div className="container">
          <hr className="border-2 border-top border-primary w-100 "></hr>
          
            <div className="row">
              <p>Bilgisayar Mühendisliği Bilimi, bilgisayar donanım ve yazılım sistemleri ile bu sistemlerin uygulamalarından oluşur. Bilgisayar Mühendisliği Programı, öğrencilere bilgisayar yazılımı ve donanımı ile bilgisayar uygulamaları alanlarında dengeli temel bilgileri verecek şekilde tasarlanmıştır. Öğrencilere meslek yaşamlarında, hızla değişen bilgisayar teknolojisine uyum sağlayabilecekleri esnek bir ders programı uygulanmaktadır. Bölümüzdeki eğitim, esas olarak temel matematik dersleri, bilgisayar yazılım ve donanım sistemlerinin analizi ve tasarımı ile yapay zeka, yapay sinir ağları, internet teknolojileri gibi uzmanlık konularında yoğunlaşmıştır. İş dünyasına, Veri Tabanı, Bilişim Sistemleri ve Bilgisayar Uygulamaları ile destek verir. Bilgisayar Mühendisliği Bölümü, Kamu sektöründe, Endüstride, Bilgisayar Sistemleri Tasarlayan, Geliştiren, Satan Kuruluşlarda çalışmak isteyen uzmanlar yetiştirmektedir.
 </p>
            </div>
            <h1 className="h1font mt-5 fw-bold">SIK SORULAN SORULAR</h1>
            <hr className="border-2 border-top border-primary w-100 "></hr>
            <div className="row"> 
            

            <Sorular></Sorular>
            </div>
          </div>
        </div>
      
      <br /> <br />
      

      
     


      <Footer></Footer>
     
    
    </div>
  );
}

export default App;
