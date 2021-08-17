import { Link } from 'react-router-dom';
import '../assets/Navigation.css';

const Navigation = () => (
  <nav className="Navigation">
    <div>
      LOGO
    </div>

    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/schedules">SCHEDULES</Link></li>
        <li><button type="button">LIFESTYLE</button></li>
      </ul>
    </div>

    <footer>
      <div>
        icons
      </div>
      copyright info
    </footer>
  </nav>
);

export default Navigation;
