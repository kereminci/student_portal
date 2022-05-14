import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navb/Navbar';

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