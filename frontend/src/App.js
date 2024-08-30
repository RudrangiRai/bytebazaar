


import { BrowserRouter, Routes,Route} from 'react-router-dom';

import Shop from './Pages/shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

import { CartProvider } from './Contexts/CART/CartContext';
import Navbar from './Components/Navbar/Navbar';




function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <CartProvider> {/* Wrap your entire app with CartProvider */}
         
         
          
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/laptops' element={<ShopCategory banner={men_banner} category='laptops' />} />
            <Route path='/headphones' element={<ShopCategory banner={women_banner} category='headphones' />} />
            <Route path='/phones' element={<ShopCategory banner={kid_banner} category='phones' />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            {<Route path='/login' element={<LoginSignup />} /> }
          </Routes>
          
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;