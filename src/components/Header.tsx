import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='header-list'>
          <li className='header-item'>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "header-item-link active-accueil"
                  : "header-item-link"
              }>
              Accueil
            </NavLink>
          </li>
          <li className='header-item'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header-item-link active-history"
                  : "header-item-link"
              }
              to={"/notre-histoire"}>
              Notre Histoire
            </NavLink>
          </li>
          <li className='header-item'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header-item-link active-organisation"
                  : "header-item-link"
              }
              to={"/organisation"}>
              Organisation
            </NavLink>
          </li>
          <li className='header-item'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header-item-link active-more"
                  : "header-item-list-link"
              }
              to={"/les-plus"}>
              Les plus
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
