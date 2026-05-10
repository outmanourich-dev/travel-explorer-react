import { Link } from 'react-router-dom';
import { destinations } from '../data';

const Home = () => (
  <div style={{ padding: '20px' }}>
    <h2 style={{ textAlign: 'center' }}>Destinations Populaires</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
      {destinations.map(dest => (
        <div key={dest.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
          <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}>
            <h3>{dest.name}</h3>
            <p>{dest.shortDesc}</p>
            <Link to={`/destination/${dest.slug}`} style={{ color: 'blue' }}>Voir plus</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;