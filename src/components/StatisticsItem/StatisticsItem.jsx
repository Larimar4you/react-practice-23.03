import style from './StatisticsItem.module.css';
import { IconContext } from 'react-icons';

const StatisticsItem = ({ title, total, Icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#29a14f', size: '30' }}>
        {Icon}
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
