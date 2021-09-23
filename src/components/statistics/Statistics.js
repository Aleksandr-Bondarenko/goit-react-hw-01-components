import PropTypes from 'prop-types';
import toGenerateValue from '../../js/valueGenerator';
import s from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={s.statSection}>
      {title && <h2 className={s.statTitle}>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          const randomColor = `rgb(${toGenerateValue()},${toGenerateValue()},${toGenerateValue()})`;
          return (
            <li
              className={s.statItem}
              style={{ backgroundColor: randomColor }}
              key={id}
            >
              <span className={s.statName}>{label}</span>
              <span className={s.statValue}>{percentage}&#37;</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};
