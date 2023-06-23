import propTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <ul className={css.feedbackList}>
    <li className={css.good}>Good: {good}</li>
    <li className={css.neutral}>Neutral: {neutral}</li>
    <li className={css.bad}>Bad: {bad}</li>
    <li className={css.feedbackListItem}>Total: {total}</li>
    <li className={css.positive}>
      Positive feedback: {positiveFeedback} %
    </li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positiveFeedback: propTypes.number.isRequired,
};

