const RecentSales = () => {
  const sales = [
    {
      img: "/src/assets/img/products/product-11.jpg",
      name: "Apple Watch Series 9",
      category: "Electronics",
      price: "₹640",
      date: "Today",
      status: "Processing",
      badgeClass: "bg-purple",
    },
    {
      img: "/src/assets/img/products/product-12.jpg",
      name: "Gold Bracelet",
      category: "Fashion",
      price: "₹126",
      date: "Today",
      status: "Cancelled",
      badgeClass: "badge-danger",
    },
    {
      img: "/src/assets/img/products/product-13.jpg",
      name: "Parachute Down Duvet",
      category: "Health",
      price: "₹69",
      date: "15 Jan 2025",
      status: "Onhold",
      badgeClass: "badge-cyan",
    },
    {
      img: "/src/assets/img/products/product-14.jpg",
      name: "YETI Rambler Tumbler",
      category: "Sports",
      price: "₹65",
      date: "12 Jan 2025",
      status: "Processing",
      badgeClass: "bg-purple",
    },
    {
      img: "/src/assets/img/products/product-15.jpg",
      name: "Osmo Genius Starter Kit",
      category: "Lifestyles",
      price: "₹87.56",
      date: "11 Jan 2025",
      status: "Completed",
      badgeClass: "badge-success",
    },
  ];

  return (
    <div className="col-xxl-4 col-md-12 d-flex">
      <div className="card flex-fill">
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div className="d-inline-flex align-items-center">
            <span className="title-icon bg-soft-pink fs-16 me-2">
              <i className="ti ti-box" />
            </span>
            <h5 className="card-title mb-0">Recent Sales</h5>
          </div>

          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle btn btn-sm btn-white"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar me-1" /> Weekly
            </a>
            <ul className="dropdown-menu p-3">
              <li><a className="dropdown-item">Today</a></li>
              <li><a className="dropdown-item">Weekly</a></li>
              <li><a className="dropdown-item">Monthly</a></li>
            </ul>
          </div>
        </div>

        <div className="card-body">
          {sales.map((item, i) => (
            <div
              key={i}
              className={`d-flex align-items-center justify-content-between ${
                i !== sales.length - 1 ? "mb-4" : "mb-0"
              }`}
            >
              <div className="d-flex align-items-center">
                <a className="avatar avatar-lg">
                  <img src={item.img} alt={item.name} />
                </a>
                <div className="ms-2">
                  <h6 className="fw-bold mb-1"><a>{item.name}</a></h6>

                  <div className="d-flex align-items-center item-list">
                    <p>{item.category}</p>
                    <p className="text-gray-9">{item.price}</p>
                  </div>
                </div>
              </div>

              <div className="text-end">
                <p className="fs-13 mb-1">{item.date}</p>

                <span
                  className={`badge ${item.badgeClass} badge-xs d-inline-flex align-items-center`}
                >
                  <i className="ti ti-circle-filled fs-5 me-1" />
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RecentSales;
