import { Link } from 'react-router-dom';
import '../../assets/stylesheets/LandingPage.css';
import { Icon } from '@iconify/react';

const LandingPage = () => (
  <div className="LandingPage">
    <h1>WELCOME TO STORM MOUNTAIN</h1>
    <h3>Winter sports resort</h3>
    <Link to="/home">
      <button className="Button" type="button">
        Check it out
        <Icon style={{ marginLeft: '0.8rem' }} icon="akar-icons:circle-chevron-left" width="30" height="30" hFlip />
      </button>
    </Link>
  </div>
);

export default LandingPage;
