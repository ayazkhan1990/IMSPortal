import React from "react";

const StatBox = ({ label, value, color }) => (
  <div className="border p-2 br-8">
    <p className="d-inline-flex align-items-center mb-1">
      <i className={`ti ti-circle-filled fs-8 me-1 text-${color}`} />
      {label}
    </p>
    <h4>{value}</h4>
  </div>
);

const SalesAndPurchase = () => {
  const periods = ["1D", "1W", "1M", "3M", "6M", "1Y"];

  return (
    <div className="col-xxl-8 col-xl-7 col-sm-12 d-flex">
      <div className="card flex-fill">
        {/* Header */}
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="d-inline-flex align-items-center">
            <span className="title-icon bg-soft-primary fs-16 me-2">
              <i className="ti ti-shopping-cart" />
            </span>
            <h5 className="card-title mb-0">Sales & Purchase</h5>
          </div>

          {/* Period Buttons */}
          <ul className="nav btn-group custom-btn-group">
            {periods.map((p, i) => (
              <a
                key={i}
                className={`btn btn-outline-light ${
                  p === "1Y" ? "active" : ""
                }`}
                href="#"
              >
                {p}
              </a>
            ))}
          </ul>
        </div>

        {/* Body */}
        <div className="card-body pb-0">
          <div className="d-flex align-items-center gap-2">
            <StatBox label="Total Purchase" value="3K" color="primary-300" />
            <StatBox label="Total Sales" value="1K" color="primary" />
          </div>

          <div id="sales-daychart" />
        </div>
      </div>
    </div>
  );
};

export default SalesAndPurchase;
