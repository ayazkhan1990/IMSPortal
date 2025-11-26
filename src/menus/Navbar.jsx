
import { Routes, Route } from "react-router";
import Dashboard from '../pages/dashboard/Dashboard';
import ProductList from '../pages/ProductList';
import AddProduct from "../pages/AddProduct";
const Navbar = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="productList" element={<ProductList/>} />
        <Route path="addProduct" element={<AddProduct/>} />
      </Routes>
    
  )
}

export default Navbar
