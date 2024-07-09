import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from '../src/Component/Header';
import Footer from '../src/Component/Footer/Footer'
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';

function AppContent() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navbar />
      {/* <Header /> */}
      {location.pathname !== '/cart' && <Header />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      {/* <Footer /> */}
      {location.pathname !== '/cart' && <Footer />}
      
      {/* </BrowserRouter> */}
      
      
    </div>
  );
}

// export default AppContent;

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;