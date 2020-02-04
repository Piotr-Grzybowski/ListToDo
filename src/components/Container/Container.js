import React from 'react';
import styles from './Container.scss';
import PropsTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
const Container = ({children}) => (
  <div className={styles.component}>
    {children}
  </div>
);

Container.propsTypes = {
  children: PropsTypes.node,
};

export default Container;