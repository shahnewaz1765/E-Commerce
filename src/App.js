import "./App.css";
import "../src/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import LoginSignup from "./pages/LoginSignup";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Product from "./pages/Product";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category='mens'/>}/>
          <Route path='/womens' element={<ShopCategory  category='womens'/>}/>
          <Route path='/kids' element={< ShopCategory category='kid'/>}/>
          <Route path='/product' element={<Product/>}/>
            <Route path=':productId' element={<Product/>}/>
          <Route path='/cart' element={< Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          
        </Routes>
        
        </BrowserRouter>
        
        
       
    </div>
  );
}

export default App;
