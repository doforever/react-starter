import {connect} from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = state => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(Navigation);
