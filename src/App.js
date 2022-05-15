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
import Login from "./components/login/Login";
import Register from "./components/register/Register"
import Etkinlikler from "./pages/Etkinlikler";
import Bolum from "./pages/Bolum";
import Haber from "./pages/Haber"
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
            
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='etkinlikler' element={<Etkinlikler />} />
            <Route path='haber' element={<Haber />} />
            <Route path='/' element={<Bolum />}>
              {/* BU SATIRDA BILGI ISLEMIN ALT DALLARI OLMALI A1 A2 A3 GECICI VERILDI GITMESI GEREKEN SAYFALAR VERILMELI*/}
              <Route path='bolum' element={<Bolum />} />
              <Route path='bolum' element={<Bolum />} />
              <Route path='bolum' element={<Bolum />} />
            </Route>
            <Route path='*' element={<Error />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
