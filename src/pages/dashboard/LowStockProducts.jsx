import React from "react";

const LowStockProducts = () => {
  const products = [
    {
      img: "/src/assets/img/products/product-06.jpg",
      name: "Dell XPS 13",
      id: "#665814",
      stock: 8,
    },
    {
      img: "/src/assets/img/products/product-07.jpg",
      name: "Vacuum Cleaner Robot",
      id: "#940004",
      stock: 14,
    },
    {
      img: "/src/assets/img/products/product-08.jpg",
      name: "KitchenAid Stand Mixer",
      id: "#325569",
      stock: 21,
    },
    {
      img: "/src/assets/img/products/product-09.jpg",
      name: "Levi's Trucker Jacket",
      id: "#124588",
      stock: 12,
    },
    {
      img: "/src/assets/img/products/product-10.jpg",
      name: "Lay's Classic",
      id: "#365586",
      stock: 10,
    },
  ];

  return (
    <div className="col-xxl-4 col-md-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div className="d-inline-flex align-items-center">
            <span className="title-icon bg-soft-danger fs-16 me-2">
              <i className="ti ti-alert-triangle" />
            </span>
            <h5 className="card-title mb-0">Low Stock Products</h5>
          </div>
          <a href="low-stocks.html" className="fs-13 fw-medium text-decoration-underline">
            View All
          </a>
        </div>

        <div className="card-body">
          {products.map((p, i) => (
            <div
              key={i}
              className={`d-flex align-items-center justify-content-between ${
                i !== products.length - 1 ? "mb-4" : "mb-0"
              }`}
            >
              <div className="d-flex align-items-center">
                <a href="#" className="avatar avatar-lg">
                  <img src={p.img} alt={p.name} />
                </a>
                <div className="ms-2">
                  <h6 className="fw-bold mb-1">
                    <a href="#">{p.name}</a>
                  </h6>
                  <p className="fs-13">ID : {p.id}</p>
                </div>
              </div>

              <div className="text-end">
                <p className="fs-13 mb-1">Instock</p>
                <h6 className="text-orange fw-medium">{p.stock.toString().padStart(2, "0")}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowStockProducts;
