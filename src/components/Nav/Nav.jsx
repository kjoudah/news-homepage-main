import logo from './../../assets/images/logo.svg';

function Nav() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="">
            <li>New</li>
          </a>
          <a href="">
            <li>Popular</li>
          </a>
          <a href="">
            <li>Trending</li>
          </a>
          <a href="">
            <li>Categories</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
