import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getSearchResults } from '../../redux/cardsRedux';
import { getSearchString, createAction_changeSearchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  foundCards: getSearchResults(state),
  searchString: getSearchString(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
