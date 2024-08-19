import React from "react";
import TransactionSummary from "./TransactionSummary";
import TransactionDetails from "./TransactionDetails";

const TransactionItem = ({
  icon,
  color,
  title,
  subtitle,
  amount,
  time,
  cardUsed,
  referenceId,
}) => {
  return (
    <details>
      <summary>
        <TransactionSummary
          icon={icon}
          color={color}
          title={title}
          subtitle={subtitle}
          amount={amount}
        />
      </summary>
      <TransactionDetails
        time={time}
        cardUsed={cardUsed}
        referenceId={referenceId}
      />
    </details>
  );
};

export default TransactionItem;
