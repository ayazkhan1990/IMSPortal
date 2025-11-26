import React from "react";

const Sales = () => {
  const salesData = [
    {
      date: "24 May 2025",
      img: "/src/assets/img/customer/customer16.jpg",
      name: "Andrea Willer",
      id: "#114589",
      status: "Completed",
      statusClass: "badge-success",
      amount: "₹4,560",
    },
    {
      date: "23 May 2025",
      img: "/src/assets/img/customer/customer17.jpg",
      name: "Timothy Sandsr",
      id: "#114589",
      status: "Completed",
      statusClass: "badge-success",
      amount: "₹3,569",
    },
    {
      date: "22 May 2025",
      img: "/src/assets/img/customer/customer18.jpg",
      name: "Bonnie Rodrigues",
      id: "#114589",
      status: "Draft",
      statusClass: "badge-pink",
      amount: "₹4,560",
    },
    {
      date: "21 May 2025",
      img: "/src/assets/img/customer/customer15.jpg",
      name: "Randy McCree",
      id: "#114589",
      status: "Completed",
      statusClass: "badge-success",
      amount: "₹2,155",
    },
    {
      date: "21 May 2025",
      img: "/src/assets/img/customer/customer13.jpg",
      name: "Dennis Anderson",
      id: "#114589",
      status: "Completed",
      statusClass: "badge-success",
      amount: "₹5,123",
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
        {salesData.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>

            <td>
              <div className="d-flex align-items-center file-name-icon">
                <a href="#" className="avatar avatar-md">
                  <img src={item.img} className="img-fluid" alt="customer" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-bold">
                    <a href="#">{item.name}</a>
                  </h6>
                  <span className="fs-13 text-orange">{item.id}</span>
                </div>
              </div>
            </td>

            <td>
              <span
                className={`badge ${item.statusClass} badge-xs d-inline-flex align-items-center`}
              >
                <i className="ti ti-circle-filled fs-5 me-1" />
                {item.status}
              </span>
            </td>

            <td className="fs-16 fw-bold text-gray-9">{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Sales;
