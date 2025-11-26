import React from "react";

const StatBox = ({ amount, label, color, trend }) => (
  <div className="border p-2 br-8">
    <h5 className={`d-inline-flex align-items-center text-${color}`}>
      {amount}
      <span
        className={`badge badge-${trend > 0 ? "success" : "danger"} badge-xs d-inline-flex align-items-center ms-2`}
      >
        <i className={`ti ti-arrow-${trend > 0 ? "up-left" : "down-right"} me-1`} />
        {Math.abs(trend)}%
      </span>
    </h5>
    <p>{label}</p>
  </div>
);

const SalesStatics = () => {
  return (
    <div className="col-xl-6 col-sm-12 d-flex">
      <div className="card flex-fill">

        {/* Header */}
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="d-inline-flex align-items-center">
            <span className="title-icon bg-soft-danger fs-16 me-2">
              <i className="ti ti-alert-triangle" />
            </span>
            <h5 className="card-title mb-0">Sales Statics</h5>
          </div>

          <div className="dropdown">
            <a className="dropdown-toggle btn btn-sm btn-white" data-bs-toggle="dropdown">
              <i className="ti ti-calendar me-1" />2025
            </a>
            <ul className="dropdown-menu p-3">
              {["2025", "2022", "2021"].map((yr) => (
                <li key={yr}>
                  <a className="dropdown-item">{yr}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Body */}
        <div className="card-body pb-0">
          <div className="d-flex align-items-center flex-wrap gap-2">
            <StatBox amount="₹12,189" label="Revenue" color="teal" trend={25} />
            <StatBox amount="₹48,988,078" label="Expense" color="orange" trend={-25} />
          </div>

          <div id="sales-statistics" />
        </div>

      </div>
    </div>
  );
};

export default SalesStatics;
