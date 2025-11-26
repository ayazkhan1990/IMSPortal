import React from "react";

const Quotation = () => {
  const quotationData = [
    {
      date: "24 May 2025",
      img: "/src/assets/img/customer/customer16.jpg",
      name: "Andrea Willer",
      orderId: "#114589",
      status: "Sent",
      statusClass: "badge-success",
      total: "₹4,560",
    },
    {
      date: "23 May 2025",
      img: "/src/assets/img/customer/customer17.jpg",
      name: "Timothy Sandsr",
      orderId: "#114589",
      status: "Ordered",
      statusClass: "badge-warning",
      total: "₹3,569",
    },
    {
      date: "22 May 2025",
      img: "/src/assets/img/customer/customer18.jpg",
      name: "Bonnie Rodrigues",
      orderId: "#114589",
      status: "Pending",
      statusClass: "badge-cyan",
      total: "₹4,560",
    },
    {
      date: "21 May 2025",
      img: "/src/assets/img/customer/customer15.jpg",
      name: "Randy McCree",
      orderId: "#114589",
      status: "Ordered",
      statusClass: "badge-warning",
      total: "₹2,155",
    },
    {
      date: "21 May 2025",
      img: "/src/assets/img/customer/customer13.jpg",
      name: "Dennis Anderson",
      orderId: "#114589",
      status: "Sent",
      statusClass: "badge-success",
      total: "₹5,123",
    },
  ];

  return (
    <table className="table table-borderless custom-table">
      <thead className="thead-light">
        <tr>
          <th>Date</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {quotationData.map((item, i) => (
          <tr key={i}>
            <td>{item.date}</td>

            <td>
              <div className="d-flex align-items-center file-name-icon">
                <a href="#" className="avatar avatar-md">
                  <img src={item.img} className="img-fluid" alt={item.name} />
                </a>

                <div className="ms-2">
                  <h6 className="fw-medium">
                    <a href="#">{item.name}</a>
                  </h6>
                  <span className="fs-13 text-orange">{item.orderId}</span>
                </div>
              </div>
            </td>

            <td>
              <span className={`badge ${item.statusClass} badge-xs d-inline-flex align-items-center`}>
                <i className="ti ti-circle-filled fs-5 me-1" />
                {item.status}
              </span>
            </td>

            <td className="text-gray-9">{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Quotation;
