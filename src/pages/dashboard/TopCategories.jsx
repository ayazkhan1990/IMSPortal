import React from "react";

const categorySales = [
  { name: "Electronics", count: 698, className: "category-primary" },
  { name: "Sports", count: 545, className: "category-orange" },
  { name: "Lifestyles", count: 456, className: "category-secondary" },
];

const stats = [
  { label: "Total Number Of Categories", count: 698, color: "text-indigo" },
  { label: "Total Number Of Products", count: 7899, color: "text-orange" },
];

const TopCategories = () => {
  return (
    <div className="col-xxl-4 col-md-6 d-flex">
      <div className="card flex-fill">

        {/* Header */}
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div className="d-inline-flex align-items-center">
            <span className="title-icon bg-soft-orange fs-16 me-2">
              <i className="ti ti-users" />
            </span>
            <h5 className="card-title mb-0">Top Categories</h5>
          </div>

          {/* Dropdown */}
          <div className="dropdown">
            <a
              className="dropdown-toggle btn btn-sm btn-white d-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar me-1" /> Weekly
            </a>

            <ul className="dropdown-menu p-3">
              {["Today", "Weekly", "Monthly"].map((item, index) => (
                <li key={index}>
                  <a className="dropdown-item">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Body */}
        <div className="card-body">

          {/* Top Categories */}
          <div className="d-flex align-items-start justify-content-between flex-wrap gap-4 mb-4">

            {/* Left side chart space (remove if not needed) */}
            <div>
              <canvas id="top-category" height={230} width={200} />
            </div>

            {/* Right side numbers */}
            <div>
              {categorySales.map((cat, index) => (
                <div key={index} className={`category-item ${cat.className}`}>
                  <p className="fs-13 mb-1">{cat.name}</p>
                  <h2 className="d-flex align-items-center">
                    {cat.count}
                    <span className="fs-13 fw-normal text-default ms-1">Sales</span>
                  </h2>
                </div>
              ))}
            </div>

          </div>

          {/* Stats */}
          <h6 className="mb-2">Category Statistics</h6>

          <div className="border br-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`d-flex align-items-center justify-content-between p-2 ${
                  index === 0 ? "border-bottom" : ""
                }`}
              >
                <p className="d-inline-flex align-items-center mb-0">
                  <i
                    className={`ti ti-square-rounded-filled fs-8 me-2 ${item.color}`}
                  />
                  {item.label}
                </p>
                <h5>{item.count}</h5>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopCategories;
