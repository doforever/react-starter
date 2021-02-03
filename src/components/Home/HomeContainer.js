import {connect} from 'react-redux';
import Home from './Home';
import {createActionAddList, getListsForHome} from '../../redux/listsRedux';
import {createActionClearChoice} from '../../redux/chosenListRedux';
import {createAction_moveCard} from '../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getListsForHome(state),
  searchString: state.searchString,
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    listId: props.id,
    title,
  })),
  clearChosenList: listId => dispatch(createActionClearChoice(listId)),
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
