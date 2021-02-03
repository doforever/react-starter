import {connect} from 'react-redux';
import Home from './Home';
import {createActionAddList, getListsForHome} from '../../redux/listsRedux';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getListsForHome(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
