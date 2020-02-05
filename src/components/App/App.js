import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayouts from '../MainLayouts/MainLayouts';
import Faq from '../FAQ/FAQ';
import { AnimatedSwitch } from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer';
import { DragDropContext } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import SearchResults from '../SearchResults/SearchResultsContainer';

class App extends React.Component {
  static propTypes = {
    moveCard: PropTypes.func,
  }
  
  render () {
    const { moveCard } = this.props;
    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };

    return (
      <BrowserRouter>
        <DragDropContext onDragEnd={moveCardHandler}>
          <MainLayouts>
          
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className={styles.switchWrapper}
            >
              <Route exact path='/' component={Home} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/faq' component={Faq} />
              <Route exact path='/list/:id' component={List} />
              <Route exact path='/search/:searchString' component={SearchResults} />
            </AnimatedSwitch>
          
          </MainLayouts>
        </DragDropContext>
      </BrowserRouter>
    );
  }
}

export default App;