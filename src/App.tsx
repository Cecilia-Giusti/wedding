import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error";
import History from "./pages/History";
import Home from "./pages/Home";
import More from "./pages/More";
import Organisation from "./pages/Organisation";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notre-histoire' element={<History />} />
        <Route path='/organisation' element={<Organisation />} />
        <Route path='/les-plus' element={<More />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
