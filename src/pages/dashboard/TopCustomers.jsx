
const customers = [
  { img: "customer11.jpg", name: "Carlos Curran", country: "USA", orders: 24, amount: "₹8,9645" },
  { img: "customer12.jpg", name: "Stan Gaunter", country: "UAE", orders: 22, amount: "₹16,985" },
  { img: "customer13.jpg", name: "Richard Wilson", country: "Germany", orders: 14, amount: "₹5,366" },
  { img: "customer14.jpg", name: "Mary Bronson", country: "Belgium", orders: 8, amount: "₹4,569" },
  { img: "customer15.jpg", name: "Annie Tremblay", country: "Greenland", orders: 14, amount: "₹3,5698" }
];

const TopCustomers = () => {
  return (
    <div className="col-xxl-4 col-md-6 d-flex">
      <div className="card flex-fill">

        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div className="d-inline-flex align-items-center">
            <span className="title-icon bg-soft-orange fs-16 me-2">
              <i className="ti ti-users" />
            </span>
            <h5 className="card-title mb-0">Top Customers</h5>
          </div>
          <a href="customers.html" className="fs-13 fw-medium text-decoration-underline">View All</a>
        </div>

        <div className="card-body">
          {customers.map((c, i) => (
            <div
              key={i}
              className={`d-flex align-items-center justify-content-between flex-wrap gap-2 ${
                i !== customers.length - 1 ? "border-bottom mb-3 pb-3" : ""
              }`}
            >
              <div className="d-flex align-items-center">
                <a className="avatar avatar-lg flex-shrink-0">
                  <img src={`/src/assets/img/customer/${c.img}`} alt="customer" />
                </a>
                <div className="ms-2">
                  <h6 className="fs-14 fw-bold mb-1"><a>{c.name}</a></h6>
                  <div className="d-flex align-items-center item-list">
                    <p className="d-inline-flex align-items-center">
                      <i className="ti ti-map-pin me-1" /> {c.country}
                    </p>
                    <p>{c.orders} Orders</p>
                  </div>
                </div>
              </div>

              <div className="text-end">
                <h5>{c.amount}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TopCustomers;
