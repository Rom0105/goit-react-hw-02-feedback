import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      {title && <h2 className={s.text}>{title}</h2>}

      <ul className={s.items}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={s.item}>
            <span className={s.label}>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
