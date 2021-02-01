import {connect} from 'react-redux';
import App from './App';
import {createActionAddList, getListsForApp} from '../../redux/listsRedux';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getListsForApp(state),
  searchString: state.searchString,
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
