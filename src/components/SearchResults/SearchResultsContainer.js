import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResult} from '../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  cards: getCardsForSearchResult(state),
});

export default connect(mapStateToProps)(SearchResults);
