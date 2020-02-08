import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

// eslint-disable-next-line no-unused-vars
const Card = ({title, id, index, removeCard}) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <article
        className={styles.component}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {title}
        {/* <button onClick={removeCard}>X</button> */}
      </article>
    )}
  </Draggable>
);

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
  removeCard: PropTypes.func,
};

export default Card;