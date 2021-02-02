import {connect} from 'react-redux';
import Navigation from './Navigation';
import {getChosenListId, createActionChooseList, createActionClearChoice} from '../../redux/chosenListRedux';
import {getListsForNavigation} from '../../redux/listsRedux';

const mapStateToProps = (state) => ({
  chosenListId: getChosenListId(state),
  lists: getListsForNavigation(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeChosenList: listId => dispatch(createActionChooseList(listId)),
  clearChosenList: () => dispatch(createActionClearChoice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
