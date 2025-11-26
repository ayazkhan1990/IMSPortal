const CardOne = ({ totalSel, payment, persent, className }) => {
  return (
    <>
          <div className={`card ${className} sale-widget flex-fill`}>
            <div className="card-body d-flex align-items-center">
              <span className="sale-icon bg-white text-primary">
                <i className="ti ti-file-text fs-24" />
              </span>
              <div className="ms-2">
                <p className="text-white mb-1">{totalSel}</p>
                <div className="d-inline-flex align-items-center flex-wrap gap-2">
                  <h4 className="text-white mb-0">₹ {payment}</h4>
                  <span className="badge badge-soft-primary">
                    <i className="ti ti-arrow-up me-1" />
                    {persent}
                  </span>
                </div>
              </div>
            </div>
        
      </div>
    </>
  );
};

export default CardOne;
