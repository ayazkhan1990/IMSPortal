import React from "react";

const Expenses = () => {
  const expensesData = [
    {
      date: "24 May 2025",
      title: "Electricity Payment",
      id: "#EX849",
      status: "Approved",
      statusClass: "badge-success",
      total: "₹200",
    },
    {
      date: "23 May 2025",
      title: "Electricity Payment",
      id: "#EX849",
      status: "Approved",
      statusClass: "badge-success",
      total: "₹200",
    },
    {
      date: "22 May 2025",
      title: "Stationery Purchase",
      id: "#EX848",
      status: "Approved",
      statusClass: "badge-success",
      total: "₹50",
    },
    {
      date: "21 May 2025",
      title: "AC Repair Service",
      id: "#EX847",
      status: "Pending",
      statusClass: "badge-cyan",
      total: "₹800",
    },
    {
      date: "21 May 2025",
      title: "Client Meeting",
      id: "#EX846",
      status: "Approved",
      statusClass: "badge-success",
      total: "₹100",
    },
  ];

  return (
    <table className="table table-borderless custom-table">
      <thead className="thead-light">
        <tr>
          <th>Date</th>
          <th>Expenses</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {expensesData.map((item, i) => (
          <tr key={i}>
            <td>{item.date}</td>

            <td>
              <h6 className="fw-medium">
                <a href="#">{item.title}</a>
              </h6>
              <span className="fs-13 text-orange">{item.id}</span>
            </td>

            <td>
              <span
                className={`badge ${item.statusClass} badge-xs d-inline-flex align-items-center`}
              >
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

export default Expenses;
