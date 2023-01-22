import s from './transactionhistory.module.scss';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
      <div className={s.wrapper}>
        <table className={s.transactionHistory}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(items => (
              <tr className={s.list}>
                <td className={s.item}>{items.type}</td>
                <td className={s.item}>{items.amount}</td>
                <td className={s.item}>{items.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};