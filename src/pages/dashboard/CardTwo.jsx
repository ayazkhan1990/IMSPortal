import React from 'react'

const CardTwo = ({Profit, name, persent, color, myicon}) => {
  return (
    <>
      			<div className="col-xl-3 col-sm-6 col-12 d-flex">
						<div className="card revenue-widget flex-fill">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
									<div>
								<h4 className="mb-1">₹ { Profit}</h4>
										<p>{name}</p>
									</div>
									<span className={`revenue-icon ${myicon}`}>
										<i className="fa-solid fa-layer-group fs-16"></i>
									</span>
								</div>
								<div className="d-flex align-items-center justify-content-between">
									<p className="mb-0"><span className={`fs-13 fw-bold ${color}`}>{persent}</span> vs Last Month</p>
									<a href="profit-and-loss.html" className="text-decoration-underline fs-13 fw-medium">View All</a>
								</div>
							</div>
						</div>
					</div>
    </>
  )
}

export default CardTwo