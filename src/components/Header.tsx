import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

interface headerInt {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
  headerRef: React.RefObject<HTMLDivElement>;
  screenWidth: number;
}

const Header = ({ openNav, setOpenNav, headerRef, screenWidth }: headerInt) => {
  const first = useRef<HTMLDivElement>(null);
  const second = useRef<HTMLDivElement>(null);
  const third = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (first.current && second.current && third.current) {
      if (openNav) {
        first.current.classList.add("open");
        second.current.classList.add("open");
        third.current.classList.add("open");
      } else {
        first.current.classList.remove("open");
        second.current.classList.remove("open");
        third.current.classList.remove("open");
      }
    }
  }, [openNav]);

  const handleClickButton = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className='header' ref={headerRef}>
      {screenWidth > 600 ? (
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
            {/* <li className='header-item'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "header-item-link active-more"
                : "header-item-list-link"
            }
            to={"/les-plus"}>
            Les plus
          </NavLink>
        </li> */}
          </ul>
        </nav>
      ) : (
        <div className='mobile'>
          <button
            className='button-nav'
            onClick={() => {
              handleClickButton();
            }}>
            <div className='button-nav-bar first' ref={first}></div>
            <div className='button-nav-bar second' ref={second}></div>
            <div className='button-nav-bar third' ref={third}></div>
          </button>

          <nav className={openNav ? "mobile-nav open-nav" : "mobile-nav"}>
            <ul className='mobile-nav-list'>
              <li
                className={
                  openNav ? "mobile-nav-item open-li-first" : "mobile-nav-item"
                }>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "mobile-nav-item-link active-accueil"
                      : "mobile-nav-item-link"
                  }>
                  Accueil
                </NavLink>
              </li>
              <li
                className={
                  openNav ? "mobile-nav-item open-li-second" : "mobile-nav-item"
                }>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "mobile-nav-item-link active-history"
                      : "mobile-nav-item-link"
                  }
                  to={"/notre-histoire"}>
                  Notre Histoire
                </NavLink>
              </li>
              <li
                className={
                  openNav ? "mobile-nav-item open-li-third" : "mobile-nav-item"
                }>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "mobile-nav-item-link active-organisation"
                      : "mobile-nav-item-link"
                  }
                  to={"/organisation"}>
                  Organisation
                </NavLink>
              </li>
              {/* <li className={openNav ? "mobile-nav-item open-li-fourth" : "mobile-nav-item"}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-item-link active-more"
                : "mobile-nav-item-list-link"
            }
            to={"/les-plus"}>
            Les plus
          </NavLink>
        </li> */}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
