import { useState } from 'react';
import logo from './../../assets/images/logo.svg';
import './Nav.scss';

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="nav nav-mobile">
        {open ? (
          <div onClick={() => setOpen(false)} className="backdrop"></div>
        ) : (
          <></>
        )}
        <img src={logo} alt="logo" />
        <div className="mobile-menu">
          <ul className={open ? 'mobile-nav open' : 'mobile-nav'}>
            <li className="nav-item mobile">Home</li>
            <li className="nav-item mobile">New</li>
            <li className="nav-item mobile">Popular</li>
            <li className="nav-item mobile">Trending</li>
            <li className="nav-item mobile">Categories</li>
          </ul>
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={open ? 'menu-toggle open' : 'menu-toggle'}
        ></button>
      </nav>
    </header>
  );
};

const DesktopNav = () => {
  return (
    <header>
      <nav className="nav nav-desktop">
        <img src={logo} alt="logo" />
        <ul className="desktop-nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">New</li>
          <li className="nav-item">Popular</li>
          <li className="nav-item">Trending</li>
          <li className="nav-item">Categories</li>
        </ul>
      </nav>
    </header>
  );
};

function Nav() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <MobileHeader />
      <DesktopNav />
    </>
    // <>
    //   <header>
    //     <nav className="nav nav-mobile">
    //       {open ? (
    //         <div onClick={() => setOpen(false)} className="backdrop"></div>
    //       ) : (
    //         <></>
    //       )}
    //       <img src={logo} alt="logo" />
    //       <div className="mobile-menu">
    //         <ul className={open ? 'mobile-nav open' : 'mobile-nav'}>
    //           <li className="nav-item mobile">Home</li>
    //           <li className="nav-item mobile">New</li>
    //           <li className="nav-item mobile">Popular</li>
    //           <li className="nav-item mobile">Trending</li>
    //           <li className="nav-item mobile">Categories</li>
    //         </ul>
    //       </div>
    //       <button
    //         onClick={() => setOpen((prev) => !prev)}
    //         className={open ? 'menu-toggle open' : 'menu-toggle'}
    //       ></button>
    //     </nav>
    //   </header>

    //   <header>
    //     <nav className="nav nav-desktop">
    //       <img src={logo} alt="logo" />
    //       <ul className="desktop-nav">
    //         <li className="nav-item">Home</li>
    //         <li className="nav-item">New</li>
    //         <li className="nav-item">Popular</li>
    //         <li className="nav-item">Trending</li>
    //         <li className="nav-item">Categories</li>
    //       </ul>
    //     </nav>
    //   </header>
    // </>
  );
}

export default Nav;
