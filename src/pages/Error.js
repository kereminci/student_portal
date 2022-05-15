import { Link } from 'react-router-dom';

const Error = () => {
  var liStyle = {
    height: "80%",
    width: "100%",
    padding: "100px"

  };
  return (
    
    <section className={liStyle}>
      <br /><br />
      <h2>404</h2>
      <p>page not found</p>
      <br /><br />
      <Link to='/' className='btn btn-primary-lg'>back home</Link>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br />
    </section>
    
  );
};
export default Error;