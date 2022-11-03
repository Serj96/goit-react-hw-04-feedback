import PropTypes from 'prop-types';
import css from './Message.module.css';

const Message = ({ message }) => {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Message;
