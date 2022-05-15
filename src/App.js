import "./App.css";
/*
import Slider from './components/slider/Slider';
import Main from './components/main/Main';
import Footer from "./components/footer/Footer";
import Navbar from './components/navb/Navbar';
import Etk from "./components/etkinlikler/Etk";
import Bolum from "./components/bolum/Bolum"*/
import Hakkimizda from "./pages/Hakkimizda";
import Anasayfa from "./pages/Anasayfa";
import SharedLayout from "./pages/SharedLayout";
import Ogrenci from "./pages/Ogrenci";
import Error from "./pages/Error";
import Akademik from "./pages/Akademik";
import Yerleskeler from "./pages/Yerleskeler";
import Arastirma from "./pages/Arastirma";
import A1 from "./pages/A1";
import Bilgiislem from "./pages/Bilgiislem";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
         {/* EKLENMEK ISTENEN SAYFALAR BURADAN ROUTE OLARAK ROUTESIN ICINDE ASAGIDAKI SYNTAXLA BELIRTILMELI 
      SAYFALAR EKLENIRKEN NAVBAR VE FOOTER EKLENMEDEN EKLENMELI. 
      SHAREDLAYOUT.JS DOSYASI NAVBAR VE FOOTERI OTOMATIK OLARAK TUM DOSYALARA EKLIYOR */}
      <BrowserRouter>
        <Routes>
          <Route  path='/' exact element={<SharedLayout />}>
            <Route index element={<Anasayfa />} />
            <Route path='hakkimizda' element={<Hakkimizda />} />
            <Route path='student_portal' element={<Anasayfa />} />
            <Route path='ogrenci' element={<Ogrenci />} />
            <Route path='akademik' element={<Akademik />} />
            <Route path='bilgiislem' element={<Bilgiislem />}>
              {/* BU SATIRDA BILGI ISLEMIN ALT DALLARI OLMALI A1 A2 A3 GECICI VERILDI GITMESI GEREKEN SAYFALAR VERILMELI*/}
              <Route path='/bilgiislem/a1' element={<A1 />} />
              <Route path='/bilgiislem/a2' element={<A1 />} />
              <Route path='/bilgiislem/a3' element={<A1 />} />
            </Route>
            <Route path='arastirma' element={<Arastirma />} />
            <Route path='yerleskeler' element={<Yerleskeler />} />
            <Route path='*' element={<Error />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
