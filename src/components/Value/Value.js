import PropTypes from 'prop-types';
import css from  './Value.module.css';


const Value = ({good, neutral, bad, total = 0, countPositiveFeedback = 0}) => {
return (
   <>
   <h2 className={css.title}>Statistics</h2>
   <p className={css.p}>Neutral: {neutral}</p>
   <p className={css.p}>Bad: {bad}</p>
   <p className={css.p}>Good: {good}</p>
   <p className={css.p}>Positive feedback: {countPositiveFeedback}%</p>
   <p className={css.p}>Total: {total}</p>
   </>
   )
};

Value.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   countPositiveFeedback: PropTypes.number.isRequired,
};
export default Value;

