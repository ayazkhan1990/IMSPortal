
const InfoBox = ({ icon, title, value, color }) => (
  <div className="col-md-4">
    <div className="info-item border bg-light p-3 text-center">
      <div className={`mb-2 fs-24 text-${color}`}>
        <i className={icon} />
      </div>
      <p className="mb-1">{title}</p>
      <h5>{value}</h5>
    </div>
  </div>
);

const OverallInformation = () => {
  return (
    <div className="col-xxl-4 col-xl-5 d-flex">
      <div className="card flex-fill">
        {/* Header */}
        <div className="card-header d-flex align-items-center">
          <span className="title-icon bg-soft-info fs-16 me-2">
            <i className="ti ti-info-circle" />
          </span>
          <h5 className="card-title mb-0">Overall Information</h5>
        </div>

        {/* Info Boxes */}
        <div className="card-body">
          <div className="row g-3">
            <InfoBox icon="ti ti-user-check" title="Suppliers" value="6987" color="info" />
            <InfoBox icon="ti ti-users" title="Customer" value="4896" color="orange" />
            <InfoBox icon="ti ti-shopping-cart" title="Orders" value="487" color="teal" />
          </div>
        </div>

        {/* Footer Section */}
        <div className="card-footer pb-sm-0">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <h5 className="mb-0">Customers Overview</h5>
            <div className="dropdown">
              <a className="dropdown-toggle btn btn-sm btn-white" data-bs-toggle="dropdown">
                <i className="ti ti-calendar me-1" /> Today
              </a>
              <ul className="dropdown-menu p-3">
                <li><a className="dropdown-item">Today</a></li>
                <li><a className="dropdown-item">Weekly</a></li>
                <li><a className="dropdown-item">Monthly</a></li>
              </ul>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-sm-5">
              <div id="customer-chart" />
            </div>

            <div className="col-sm-7">
              <div className="row gx-0">
                <div className="col-sm-6 text-center border-end">
                  <h2 className="mb-1">5.5K</h2>
                  <p className="text-orange mb-2">First Time</p>
                  <span className="badge badge-success badge-xs">
                    <i className="ti ti-arrow-up-left me-1" />25%
                  </span>
                </div>
                <div className="col-sm-6 text-center">
                  <h2 className="mb-1">3.5K</h2>
                  <p className="text-teal mb-2">Return</p>
                  <span className="badge badge-success badge-xs">
                    <i className="ti ti-arrow-up-left me-1" />21%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OverallInformation;
