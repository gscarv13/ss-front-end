import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../../assets/images/logo1.png';
import '../../assets/stylesheets/Navigation.css';
import SessionButton from '../Authentication/SessionButton';

const Navigation = () => (
  <nav className="Navigation">
    <div className="Navigation-Logo">
      <img src={logo} alt="Storm Mountain Logo" />
    </div>

    <div className="Navigation-Links">
      <ul>
        <li>
          <NavLink
            exact
            to="/home"
            className="Navigation-Link"
            activeClassName="Active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navigation-Link"
            activeClassName="Active"
            to="/activities"
          >
            Activities
          </NavLink>
        </li>
        <li>
          <SessionButton />
        </li>
      </ul>
    </div>

    <footer>
      <div className="Navigation-Icons" data-testid="icons-container">
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <Icon icon="grommet-icons:twitter" width="20" height="20" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Icon icon="brandico:facebook" width="20" height="20" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Google%2B" target="_blank" rel="noreferrer">
          <Icon icon="typcn:social-google-plus" width="25" height="25" />
        </a>
        <a href="https://vimeo.com/" target="_blank" rel="noreferrer">
          <Icon icon="akar-icons:vimeo-fill" width="20" height="20" />
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
          <Icon icon="cib:pinterest-p" width="20" height="20" />
        </a>
      </div>
      &copy; 2021
    </footer>
  </nav>
);

export default Navigation;
