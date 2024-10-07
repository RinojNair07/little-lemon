import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Home from './pages/Home';
import About from './pages/About';
import BookingPage from './pages/Booking';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/bookingPage' element={<BookingPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
