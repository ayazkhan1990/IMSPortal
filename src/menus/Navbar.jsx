
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from '../pages/dashboard/Dashboard';
import ProductList from '../pages/ProductList';
const Navbar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/productList" element={<ProductList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navbar
