import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.Statistics}>
      {title && <h2 className={s.StatisticsTile}>{title}</h2>}

      <ul className={s.StatisticsLlist}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.StatisticsItem}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215,
              ).toString(16)}`,
            }}
          >
            <span className={s.StatisticsLabel}>{stat.label}</span>
            <span className={s.StatisticsPercentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};
export default Statistics;
