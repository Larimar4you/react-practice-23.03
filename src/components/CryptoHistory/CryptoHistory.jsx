import styles from './CryptoHistory.module.css';
import { format } from 'date-fns';

const CryptoHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>№</th>
          <th className={styles.th}>PRICE</th>
          <th className={styles.th}>AMOUNT</th>
          <th className={styles.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className={styles.tr}>
            <td className={styles.td}>{index + 1}</td>
            <td className={styles.td}>{item.price}</td>
            <td className={styles.td}>{item.amount}</td>
            <td className={styles.td}>
              {format(new Date(item.date), 'dd/MM/yyyy, h:mm a')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
