import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navb/Navbar';
import Nav2 from '../components/nav2/Nav2';
const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      
      <section className='section'>
        <Outlet />
        
      </section>
      <Footer />
    </div>
  );
};
export default SharedLayout;