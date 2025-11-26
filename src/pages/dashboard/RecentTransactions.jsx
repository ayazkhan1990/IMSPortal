import { useState } from "react";
import Sales from "../tables/Sales";
import Purchase from "../tables/Purchase";
import Quotation from "../tables/Quotation";
import Expenses from "../tables/Expenses";
import Invoices from "../tables/Invoices";

const RecentTransactions = () => {
  const [activeTab, setActiveTab] = useState("sale");

  return (
    <>
      <div className="col-xl-6 col-sm-12 col-12 d-flex">
        <div className="card flex-fill">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-inline-flex align-items-center">
              <span className="title-icon bg-soft-orange fs-16 me-2">
                <i className="ti ti-flag" />
              </span>
              <h5 className="card-title mb-0">Recent Transactions</h5>
            </div>
            <a
              href="online-orders.html"
              className="fs-13 fw-medium text-decoration-underline"
            >
              View All
            </a>
          </div>

          {/* --- TAB Buttons --- */}
          <ul className="nav nav-tabs nav-justified transaction-tab">
            {[
              { id: "sale", label: "Sale" },
              { id: "purchase", label: "Purchase" },
              { id: "quotation", label: "Quotation" },
              { id: "expenses", label: "Expenses" },
              { id: "invoices", label: "Invoices" },
            ].map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* --- TAB CONTENT Areas --- */}
          <div className="tab-content">
            <div
              className={`tab-pane ${
                activeTab === "sale" ? "show active" : ""
              }`}
            >
             <Sales/>
            </div>

            <div
              className={`tab-pane ${
                activeTab === "purchase" ? "show active" : ""
              }`}
            >
              <Purchase/>
            </div>

            <div
              className={`tab-pane ${
                activeTab === "quotation" ? "show active" : ""
              }`}
            >
              {/* ← QUOTATION TABLE */}
              <Quotation/>
            </div>

            <div
              className={`tab-pane ${
                activeTab === "expenses" ? "show active" : ""
              }`}
            >
              {/* ← EXPENSES TABLE */}
              <Expenses/>
            </div>

            <div
              className={`tab-pane ${
                activeTab === "invoices" ? "show active" : ""
              }`}
            >
              {/* ← INVOICES TABLE */}
              <Invoices/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentTransactions;
