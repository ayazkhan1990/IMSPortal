import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, subtitle, backTo, backText }) => {
  const topIcons = [
    { icon: "ti ti-refresh", title: "Refresh" },
    { icon: "ti ti-chevron-up", title: "Collapse", id: "collapse-header" }
  ];

  return (
    <div className="page-header d-flex align-items-center justify-content-between">
      {/* LEFT SIDE */}
      <div className="page-title">
        <h4 className="fw-bold">{title}</h4>
        <h6>{subtitle}</h6>
      </div>

      {/* RIGHT SIDE */}
      <div className="d-flex align-items-center gap-3">
        {/* Icons */}
        <ul className="table-top-head d-flex align-items-center gap-2 mb-0">
          {topIcons.map((item, index) => (
            <li key={index}>
              <a data-bs-toggle="tooltip" title={item.title} id={item.id || ""}>
                <i className={item.icon} />
              </a>
            </li>
          ))}
        </ul>

        {/* BACK BUTTON */}
        {backTo && (
          <Link to={backTo} className="btn btn-secondary">
            <i data-feather="arrow-left" className="me-2" />
            {backText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
