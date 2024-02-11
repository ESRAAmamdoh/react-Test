import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Footers from './pages/Footer';
import About from './pages/About';
import Portfolio from './pages/Portofilio';
import Contact from './pages/Contact';


function App() {
  return (
   <>
  <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={ <Portfolio />}/>
          <Route path="contact" element={ <Contact />}/>
        
        </Route>
        
      </Routes>
      <Footers />
   </>
  );
}

export default App;
