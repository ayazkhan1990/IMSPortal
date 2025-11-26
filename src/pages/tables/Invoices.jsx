import React from "react";

const invoiceData = [
  { img: "customer16.jpg", name: "Andrea Willer", id: "INV005", date: "24 May 2025", status: "Paid", badge: "success", amount: "₹1300" },
  { img: "customer17.jpg", name: "Timothy Sandsr", id: "INV004", date: "23 May 2025", status: "Overdue", badge: "warning", amount: "₹1250" },
  { img: "customer18.jpg", name: "Bonnie Rodrigues", id: "INV003", date: "22 May 2025", status: "Paid", badge: "success", amount: "₹1700" },
  { img: "customer15.jpg", name: "Randy McCree", id: "INV002", date: "21 May 2025", status: "Unpaid", badge: "danger", amount: "₹1500" },
  { img: "customer13.jpg", name: "Dennis Anderson", id: "INV001", date: "21 May 2025", status: "Paid", badge: "success", amount: "₹1000" },
];

const Invoices = () => {
  return (
    <table className="table table-borderless custom-table">
      <thead className="thead-light">
        <tr>
          <th>Customer</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {invoiceData.map((item, i) => (
          <tr key={i}>
            <td>
              <div className="d-flex align-items-center file-name-icon">
                <a className="avatar avatar-md">
                  <img src={`/src/assets/img/customer/${item.img}`} alt="img" className="img-fluid" />
                </a>
                <div className="ms-2">
                  <h6 className="fw-bold"><a>{item.name}</a></h6>
                  <span className="fs-13 text-orange">#{item.id}</span>
                </div>
              </div>
            </td>

            <td>{item.date}</td>

            <td>
              <span className={`badge badge-${item.badge} badge-xs d-inline-flex align-items-center`}>
                <i className="ti ti-circle-filled fs-5 me-1" /> {item.status}
              </span>
            </td>

            <td className="text-gray-9">{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Invoices;
