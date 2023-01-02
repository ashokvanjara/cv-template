
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Header/Navbar';
import Home from '../src/component/pages/Home'
import Signup from './component/pages/Signup';
import About from '../src/component/pages/About'
import Contect from '../src/component/pages/Contect'
import CreateCv from '../src/component/pages/CreateCv';
function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Contect' element={<Contect />} />
          <Route path='/CreateCv' element={<CreateCv />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
