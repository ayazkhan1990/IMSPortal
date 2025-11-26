import React from "react";

const Purchase = () => {
  const purchaseData = [
    { date: "24 May 2025", supplier: "Electro Mart", status: "Completed", statusClass: "badge-success", total: "₹1000" },
    { date: "23 May 2025", supplier: "Quantum Gadgets", status: "Completed", statusClass: "badge-success", total: "₹1500" },
    { date: "22 May 2025", supplier: "Prime Bazaar", status: "Pending", statusClass: "badge-cyan", total: "₹2000" },
    { date: "21 May 2025", supplier: "Alpha Mobiles", status: "Completed", statusClass: "badge-success", total: "₹1200" },
    { date: "21 May 2025", supplier: "Aesthetic Bags", status: "Completed", statusClass: "badge-success", total: "₹1300" },
    { date: "28 May 2025", supplier: "Sigma Chairs", status: "Completed", statusClass: "badge-success", total: "₹1600" },
    { date: "26 May 2025", supplier: "A-Z Stores", status: "Completed", statusClass: "badge-success", total: "₹1100" },
  ];

  return (
    <table className="table table-borderless custom-table">
      <thead className="thead-light">
        <tr>
          <th>Date</th>
          <th>Supplier</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {purchaseData.map((item, i) => (
          <tr key={i}>
            <td>{item.date}</td>

            <td>
              <a href="#" className="fw-semibold">{item.supplier}</a>
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

export default Purchase;
