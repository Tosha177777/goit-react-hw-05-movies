import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<ColorRing visible={true} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
