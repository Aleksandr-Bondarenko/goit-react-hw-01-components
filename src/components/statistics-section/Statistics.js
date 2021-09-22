import PropTypes from 'prop-types';

export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
