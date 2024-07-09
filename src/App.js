import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from '../src/Component/Header';
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Checkout from './Pages/Checkout';

function AppContent() {
  const location = useLocation();
  return (
    <div className="App">

      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;