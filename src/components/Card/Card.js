import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
  <div className={styles.component}>
    {props.title}
  </div>
);

export default Card;