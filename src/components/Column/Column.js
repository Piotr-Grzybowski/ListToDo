import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import { Droppable } from 'react-beautiful-dnd';



const Column = ({title, icon, cards, addCard, id}) => (
  <section className={styles.component}>
    <h3 className={styles.title}>
      {title}
      <span className={styles.icon}>
        <Icon name={icon}/>
      </span>
    </h3>
    <Droppable droppableId={id}>
      {provided => (
        <div
          className={styles.cards}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {cards.sort((a, b) => (a.index - b.index)).map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    <div className={styles.creator}>
      <Creator text={settings.cardCreatorText} action={addCard} />
    </div>
  </section>
);

Column.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  icon: PropTypes.string,
  id: PropTypes.string,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;