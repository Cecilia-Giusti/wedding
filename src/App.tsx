import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error";
import History from "./pages/History";
import Home from "./pages/Home";
import More from "./pages/More";
import Organisation from "./pages/Organisation";
import { useState, useRef, useEffect, useCallback } from "react";
import ScrollBouton from "./components/ScrollBouton";

const App = () => {
  const [openNav, setOpenNav] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300 && screenWidth < 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [screenWidth]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  useEffect(() => {
    setScreenWidth(window.screen.width);
    const handleClickOutside = (event: any) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [headerRef]);

  return (
    <HashRouter>
      <Header
        openNav={openNav}
        setOpenNav={setOpenNav}
        headerRef={headerRef}
        screenWidth={screenWidth}
      />
      <Routes>
        <Route path='/' element={<Home screenWidth={screenWidth} />} />
        <Route path='/notre-histoire' element={<History />} />
        <Route path='/organisation' element={<Organisation />} />
        <Route path='/les-plus' element={<More />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ScrollBouton isVisible={isVisible} />
    </HashRouter>
  );
};

export default App;
