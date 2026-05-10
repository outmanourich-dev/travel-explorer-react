import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data';

const Details = () => {
  const { slug } = useParams();
  const dest = destinations.find(d => d.slug === slug);

  if (!dest) return <h2>Destination introuvable</h2>;

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/">← Retour</Link>
      <h1>{dest.name}</h1>
      <img src={dest.img} alt={dest.name} style={{ width: '100%', borderRadius: '12px' }} />
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{dest.longDesc}</p>
    </div>
  );
};

export default Details;