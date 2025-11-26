import Welcome from "./Welcome";
import LowStockAlert from "./LowStockAlert";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import SalesAndPurchase from "./SalesAndPurchase";
import OverallInformation from "./OverallInformation";
import TopSellingProducts from "./TopSellingProducts";
import LowStockProducts from "./LowStockProducts";
import RecentSales from "./RecentSales";
import SalesStatics from "./SalesStatics";
import RecentTransactions from "./RecentTransactions";
import TopCustomers from "./TopCustomers";
import TopCategories from "./TopCategories";
import TopSalesLocation from "./TopSalesLocation";
import CopyrightFooter from "../CopyrightFooter";
import AddStock from "./AddStock";

const Dashboard = () => {
return (
<>
  
      <Welcome />
        <LowStockAlert />
        
        {/* CArd One */}
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <CardOne className="bg-primary" totalSel="Total Sales" payment="48,988.55" persent="+22%" />
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <CardOne className="bg-secondary" totalSel="Total Sales Return" payment="38,988.55" persent="+25%" />
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <CardOne className="bg-teal" totalSel="Total Purchase" payment="68,988.55" persent="+35%" />
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <CardOne className="bg-info" totalSel="Total Purchase Return" payment="58,988.55" persent="+19%" />
        </div>
        </div>
        {/* End Card One */}

        <div className="row">
          <CardTwo Profit="8,458,798" name="Profit" persent="+34%" color="text-success" myicon="bg-cyan-transparent text-cyan"/>
          <CardTwo Profit="5,458,798" name="Invoice Due" persent="+34%" color="text-success" myicon="bg-teal-transparent text-teal"/>
          <CardTwo Profit="4,458,798" name="Total Expenses" persent="+34%" color="text-success" myicon="bg-orange-transparent text-orange"/>
          <CardTwo Profit="2,458,798" name="Total Payment Returns" persent="-20%" color="text-danger" myicon="bg-indigo-transparent text-indigo"/>
         
        </div>

        {/* Sales & Purchase */}
        <div className="row">
          <SalesAndPurchase />
          <OverallInformation/>
        </div>
        {/* End Sales & Purchase */}

        {/* Top Selling Product */}
        <div className="row">
          <TopSellingProducts />
          <LowStockProducts />
          <RecentSales/>
        </div>
        {/* End Top Selling Product */}

        {/* Sales Statics */}
        <div className="row">
          <SalesStatics />
          <RecentTransactions/>
        </div>


        <div className="row">
          <TopCustomers />
          <TopCategories />
          <TopSalesLocation />
        </div>

        
     
      <CopyrightFooter/>
  
    <AddStock
  warehouses={["Lobar Handy", "Quaint Warehouse"]}
  stores={["Selosy", "Logerro"]}
  persons={["Steven", "Gravely"]}
  onSubmit={() => alert("Stock Added!")} 
/>

</>
);
};

export default Dashboard;