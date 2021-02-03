import shortid from 'shortid';

// selectors
export const getListsForHome = ({lists, chosenList}) => lists.filter(list => (list.id == chosenList) || !chosenList);
export const getListsForNavigation = ({lists}) => lists.map(list => ({id: list.id, title: list.title}));

// action name creator
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const createActionAddList = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_LIST });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
