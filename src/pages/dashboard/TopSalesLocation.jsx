import React from "react";

const salesData = [
  {
    img: "/src/assets/img/customer/customer11.jpg",
    city: "Noida",
    country: "IND",
    orders: "24 Orders",
    amount: "₹89,645",
  },
  {
    img: "/src/assets/img/customer/customer12.jpg",
    city: "Bareilly",
    country: "IND",
    orders: "22 Orders",
    amount: "₹16,985",
  },
  {
    img: "/src/assets/img/customer/customer13.jpg",
    city: "Maharashtra",
    country: "IND",
    orders: "14 Orders",
    amount: "₹5,366",
  },
  {
    img: "/src/assets/img/customer/customer14.jpg",
    city: "Chennai",
    country: "IND",
    orders: "08 Orders",
    amount: "₹4,569",
  },
  {
    img: "/src/assets/img/customer/customer15.jpg",
    city: "Ayodhya",
    country: "IND",
    orders: "14 Orders",
    amount: "₹35,698",
  },
];

const TopSalesLocation = () => {
  return (
    <div className="col-xxl-4 col-md-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div className="d-inline-flex align-items-center">
            <span className="title-icon bg-soft-orange fs-16 me-2">
              <i className="ti ti-users" />
            </span>
            <h5 className="card-title mb-0">Top Sales Location</h5>
          </div>

          <a href="/customers" className="fs-13 fw-medium text-decoration-underline">
            View All
          </a>
        </div>

        <div className="card-body">
          {salesData.map((item, index) => (
            <div
              key={index}
              className={`d-flex align-items-center justify-content-between flex-wrap gap-2 ${
                index !== salesData.length - 1 ? "border-bottom mb-3 pb-3" : ""
              }`}
            >
              <div className="d-flex align-items-center">
                <div className="avatar avatar-lg flex-shrink-0">
                  <img src={item.img} alt="customer" />
                </div>
                <div className="ms-2">
                  <h6 className="fs-14 fw-bold mb-1">{item.city}</h6>

                  <div className="d-flex align-items-center item-list">
                    <p className="d-inline-flex align-items-center">
                      <i className="ti ti-map-pin me-1" />
                      {item.country}
                    </p>
                    <p className="ms-2">{item.orders}</p>
                  </div>
                </div>
              </div>

              <div className="text-end">
                <h5>{item.amount}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TopSalesLocation;
