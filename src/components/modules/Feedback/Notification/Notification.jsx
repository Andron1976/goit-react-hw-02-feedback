import PropTypes from 'prop-types';

import style from '../Feedback.module.css';

const Notification = ({ message }) => {
  return <div className={style.message}>{message}</div>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};