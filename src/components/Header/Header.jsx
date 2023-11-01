import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<ColorRing visible={true} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
