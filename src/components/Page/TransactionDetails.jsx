import React from "react";
const TransactionDetails = ({ time, cardUsed, referenceId }) => {
  return (
    <div className="transaction-details">
      <dl>
        <div>
          <dt>Posição</dt>
          <dd>{time}</dd>
        </div>
        {cardUsed && (
          <div>
            <dt>Sigla Time</dt>
            <dd>{cardUsed}</dd>
          </div>
        )}
        <div>
          <dt>Sigla Jogador</dt>
          <dd>{referenceId}</dd>
        </div>
      </dl>
    </div>
  );
};

export default TransactionDetails;
