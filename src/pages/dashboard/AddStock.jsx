import React from "react";

const AddStock = ({
  warehouses = [],
  stores = [],
  persons = [],
  onSubmit,
}) => {
  return (
    <div className="modal fade" id="add-stock">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          
          {/* Header */}
          <div className="modal-header">
            <div className="page-title">
              <h4>Add Stock</h4>
            </div>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (onSubmit) onSubmit(e);
            }}
          >
            <div className="modal-body">
              <div className="row">

                {/* Warehouse */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Warehouse <span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select form-select">
                      <option>Select</option>
                      {warehouses.map((w, i) => (
                        <option key={i}>{w}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Store */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Store <span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select form-select">
                      <option>Select</option>
                      {stores.map((s, i) => (
                        <option key={i}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Responsible Person */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Responsible Person <span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select form-select">
                      <option>Select</option>
                      {persons.map((p, i) => (
                        <option key={i}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Product Search */}
                <div className="col-lg-12">
                  <div className="search-form mb-0">
                    <label className="form-label">
                      Product <span className="text-danger ms-1">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select Product"
                      />
                      <i data-feather="search" className="feather-search" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-md btn-dark me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-md btn-primary">
                Add Stock
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
