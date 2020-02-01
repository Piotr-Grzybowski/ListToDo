/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Card.scss';

const Card = props => (
  <div className={styles.component}>
    {props.title}
  </div>
);

export default Card;