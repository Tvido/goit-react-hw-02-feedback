import React from 'react';
import PropTypes from 'prop-types';

import './Message.css';

const Notification = ({ message }) => (
  <>
    <h2 className="message__title">{message}</h2>
  </>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
