/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Card.scss';

const Card = ({title}) => (
  <div className={styles.component}>
    {title}
  </div>
);

export default Card;