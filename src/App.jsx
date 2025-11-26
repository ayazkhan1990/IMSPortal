import "./App.css";
import Header from "./menus/Header";
import Navbar from "./menus/Navbar";
import Sidebar from "./menus/Sidebar";
import AddProduct from "./pages/AddProduct";
import PageHeader from "./pages/PageHeader";
// import Dashboard from "./pages/dashboard/Dashboard";


function App() {
  return (
    <>
      {/* Loder */}
       {/* Loder End */}
      <div className="page-wrapper">
        <div className="content">
       <PageHeader
  title="Create Product"
  subtitle="Create new product"
  backTo="/productList"
  backText="Back to Product"
/>

          <div className="main-wrapper">
              <Header />
        <Sidebar />
      <Navbar/>
          </div>
          
        
    </div>
     
       
        
        </div>
    </>
  );
}

export default App;
