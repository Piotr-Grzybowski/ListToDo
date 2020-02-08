import {connect} from 'react-redux';
import Column from './Column';
import { getCardsForColumn, createActionAddCard, createActionRemoveCard } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
  removeCard: cardId => dispatch(createActionRemoveCard({
    CardToRemoveId: cardId,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
