import PropTypes from 'prop-types';
import css from './Value.module.css';

const Value = ({ good, neutral, bad, total, countPositiveFeedback }) => {
  return (
    <>
      <p className={css.p}>Neutral: {neutral}</p>
      <p className={css.p}>Bad: {bad}</p>
      <p className={css.p}>Good: {good}</p>
      <p className={css.p}>Positive feedback: {countPositiveFeedback}%</p>
      <p className={css.p}>Total: {total}</p>
    </>
  );
};

Value.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  countPositiveFeedback: PropTypes.number.isRequired,
};
export default Value;
