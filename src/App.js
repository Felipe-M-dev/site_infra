import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Infra from './pages/Infra';
import Kpi from './pages/Kpi';
import Users from './pages/Users';
import Footer from './components/Footer';

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/Home' element={ <Home /> } />
          <Route path='/Infra' element={ <Infra /> } />
          <Route path='/Users' element={ <Users /> } />
          <Route path='/Clients' element={ <Clients /> } />
          <Route path='/Kpi' element={ <Kpi /> } />
          <Route path='/About' element={ <About /> } />
          <Route path='/Contact' element={ <Contact /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}