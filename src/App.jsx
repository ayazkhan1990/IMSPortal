import "./App.css";
import Header from "./menus/Header";
import Navbar from "./menus/Navbar";
import Sidebar from "./menus/Sidebar";
// import Dashboard from "./pages/dashboard/Dashboard";


function App() {
  return (
    <>
      {/* Loder */}
       {/* Loder End */}
      <div className="page-wrapper">
        <div className="content">
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
