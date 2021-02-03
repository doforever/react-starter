import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: (title, index) => dispatch(createActionAddCard({
    columnId: props.id,
    title,
    index,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
