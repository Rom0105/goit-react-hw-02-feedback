import PropTypes from 'prop-types';
import s from '../TransactionHistory/TransactionHistory.module.css';
function TransactionHistory({ items }) {
  return (
    <table className={s.container}>
      <thead className={s.items}>
        <tr>
          <th className={s.item}>Type</th>
          <th className={s.item}>Amount</th>
          <th className={s.item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.wrapper} key={item.id}>
            <td className={s.element}>{item.type}</td>
            <td className={s.element}>{item.amount}</td>
            <td className={s.element}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
