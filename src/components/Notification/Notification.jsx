import PropTypes from 'prop-types';
import css from './notification.module.css'

export default function Notification({ text }) {
  return <p className={css.message} >{text}</p>;
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
