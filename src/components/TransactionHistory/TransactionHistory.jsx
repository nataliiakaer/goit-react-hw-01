import T from "./TransactionHistory.module.css";

const TransactionHistory = (props) => {
  return (
    <section>
      <table className={T.transactionHistory}>
        <thead className={T.transactionHead}>
          <tr className={T.transactionHeadRow}>
            <th className={T.transactionHeader}>Type</th>
            <th className={T.transactionHeader}>Amount</th>
            <th className={T.transactionHeader}>Currency</th>
          </tr>
        </thead>

        <tbody className={T.transactionHeadBody}>
          {props.items.map((item) => {
            return (
              <tr key={item.id} className={T.transactionBodyRow}>
                <td className={T.transactionData}>{item.type}</td>
                <td className={T.transactionData}>{item.amount}</td>
                <td className={T.transactionData}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionHistory;
