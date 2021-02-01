import {connect} from 'react-redux';
import Navigation from './Navigation';
import {getChosenListId, createActionPick} from '../../redux/chosenListRedux';

const mapStateToProps = (state) => ({
  chosenListId: getChosenListId(state),
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  changeChosenList: newList => dispatch(createActionPick(newList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
