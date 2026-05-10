import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#222', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
    <h1 style={{ margin: 0 }}>TravelExplorer</h1>
    <Link to="/" style={{ color: '#fff', textDecoration: 'none', alignSelf: 'center' }}>Accueil</Link>
  </nav>
);

export default Navbar;