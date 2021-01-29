import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));
export const getCardsForSearchResult = ({cards, searchString, lists, columns}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title))
  .map( card => {
    let column = columns.filter(col => col.id == card.columnId)[0];
    let list = lists.filter(list => list.id == column.listId)[0];

    return {...card,
      columnTitle: column.title,
      listTitle: list.title,
    };
  });

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
