import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error";
import History from "./pages/History";
import Home from "./pages/Home";
import More from "./pages/More";
import Organisation from "./pages/Organisation";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [openNav, setOpenNav] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(0);

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
    </HashRouter>
  );
};

export default App;
