import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export default function Feedback({ options, increment }) {
  return (
    <>
      <ul className={css.list}>
        {options.map(buttonTitle => {
          return (
            <li className={css.item} key={buttonTitle}>
              <button
                title={buttonTitle}
                className={css.button}
                onClick={increment}
              >
                {buttonTitle}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  increment: PropTypes.func.isRequired,
};

