import logo from './../../assets/images/logo.svg';
import './Nav.scss';

function Nav() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav>
        <ul className="nav">
          <li className="nav-item"> Home</li>
          <li className="nav-item">New</li>
          <li className="nav-item">Popular</li>
          <li className="nav-item">Trending</li>
          <li className="nav-item">Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
