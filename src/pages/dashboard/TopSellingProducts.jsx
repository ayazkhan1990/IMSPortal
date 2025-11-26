const TopSellingProducts = () => {
  const products = [
    {
      img: "/src/assets/img/products/product-01.jpg",
      name: "Charger Cable - Lighting",
      price: "₹187",
      sales: "247+ Sales",
      trend: "up",
      percent: "25%",
    },
    {
      img: "/src/assets/img/products/product-16.jpg",
      name: "Yves Saint Eau De Parfum",
      price: "₹145",
      sales: "289+ Sales",
      trend: "up",
      percent: "25%",
    },
    {
      img: "/src/assets/img/products/product-03.jpg",
      name: "Apple Airpods 2",
      price: "₹458",
      sales: "300+ Sales",
      trend: "up",
      percent: "25%",
    },
    {
      img: "/src/assets/img/products/product-04.jpg",
      name: "Vacuum Cleaner",
      price: "₹139",
      sales: "225+ Sales",
      trend: "down",
      percent: "21%",
    },
    {
      img: "/src/assets/img/products/product-05.jpg",
      name: "Samsung Galaxy S21 Fe 5g",
      price: "₹898",
      sales: "365+ Sales",
      trend: "up",
      percent: "25%",
    },
  ];

  return (
    <div className="col-xxl-4 col-md-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div className="d-inline-flex align-items-center">
            <span className="title-icon bg-soft-pink fs-16 me-2">
              <i className="ti ti-box" />
            </span>
            <h5 className="card-title mb-0">Top Selling Products</h5>
          </div>

          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle btn btn-sm btn-white"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar me-1" /> Today
            </a>
            <ul className="dropdown-menu p-3">
              {["Today", "Weekly", "Monthly"].map((item) => (
                <li key={item}>
                  <a href="#" className="dropdown-item">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-body sell-product">
          {products.map((p, i) => (
            <div
              key={i}
              className={`d-flex align-items-center justify-content-between ${
                i !== products.length - 1 && "border-bottom"
              }`}
            >
              <div className="d-flex align-items-center">
                <a href="#" className="avatar avatar-lg">
                  <img src={p.img} alt="img" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-bold mb-1">
                    <a href="#">{p.name}</a>
                  </h6>
                  <div className="d-flex align-items-center item-list">
                    <p>{p.price}</p>
                    <p>{p.sales}</p>
                  </div>
                </div>
              </div>

              <span
                className={`badge badge-xs d-inline-flex align-items-center ${
                  p.trend === "up"
                    ? "bg-outline-success"
                    : "bg-outline-danger"
                }`}
              >
                <i
                  className={`ti ${
                    p.trend === "up"
                      ? "ti-arrow-up-left"
                      : "ti-arrow-down-left"
                  } me-1`}
                />
                {p.percent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
