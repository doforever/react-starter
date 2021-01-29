import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResult} from '../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  superCards: getCardsForSearchResult(state),
});

export default connect(mapStateToProps)(SearchResults);
