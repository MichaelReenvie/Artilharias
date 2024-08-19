import React from "react";

const TransactionSummary = ({ icon, color, title, subtitle, amount }) => {
  return (
    <div className="transaction-summary">
      <span className="icon" style={{ backgroundColor: color }}>
        {icon}
      </span>
      <h3>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </h3>
      <span>{amount}</span>
    </div>
  );
};

export default TransactionSummary;
