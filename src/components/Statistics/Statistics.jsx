import PropTypes from 'prop-types';
import css from './statistics.module.css';

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) {
    return (
      <>
        {
          <ul className={css.feedbackList}>
    <li className={css.good}>Good: {good}</li>
    <li className={css.neutral}>Neutral: {neutral}</li>
    <li className={css.bad}>Bad: {bad}</li>
    <li className={css.feedbackListItem}>Total: {total}</li>
    <li className={css.positive}>
    <li className={css.positive}>Positive feedback: {positivePercentage}%</li>
    </li>
          </ul>
        }
      </>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};