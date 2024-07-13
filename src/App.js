import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Checkout from './Pages/Checkout';
import ProductDetails from './Pages/ProductDetails';
import { CartProvider } from './Component/CartContext';

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
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider> 
    </BrowserRouter>
  );
}

export default App;