import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import { searchResultsContent } from '../../data/dataStore';
import { Droppable } from 'react-beautiful-dnd';
import {withRouter} from 'react-router';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.string,
    foundCards: PropTypes.array,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    location: PropTypes.object,
  }
  
  componentDidMount() {
    if (this.props.location.pathname.split(new RegExp('/search/'))[1]) {
      const stringToSearch = this.props.location.pathname.split(new RegExp('/search/'))[1];
      this.props.changeSearchString(stringToSearch);
      console.log(stringToSearch);
    }
  }

  render () {
    const {foundCards, searchString, changeSearchString} = this.props;
    return (
      <section className={styles.component} onChange={changeSearchString}>
        <h3 className={styles.title}>
          {searchResultsContent.title + '"' + searchString + '"'}
          <span className={styles.icon}>
            <Icon name={searchResultsContent.icon}/>
          </span>
        </h3>
        <Droppable droppableId="none">
          {provided => (
            <div
              className={styles.cards}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {foundCards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </section>
    );
  }}


export default withRouter(SearchResults);