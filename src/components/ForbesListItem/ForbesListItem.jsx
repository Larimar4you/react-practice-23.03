import styles from './ForbesListItem.module.css';
import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';

const ForbesListItem = ({ avatar, name, capital, isIncrease }) => {
  return (
    <>
      <img className={styles.avatar} src={avatar} alt={name} />
      <h3 className={styles.title}>{name}</h3>
      <span className={styles.capital}>
        {capital}
        <BiDollarCircle color="#2196f3" size={22} />
        {isIncrease ? <FcBullish size={22} /> : <FcBearish size={22} />}
      </span>
    </>
  );
};

export default ForbesListItem;
