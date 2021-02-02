// selectors
export const getChosenListId = ({chosenList}) => chosenList;

// action name creator
const reducerName = 'chosenList';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHOOSE_LIST = createActionName('CHOOSE_LIST');

// action creators
export const createActionChooseList = payload => ({payload, type: CHOOSE_LIST });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHOOSE_LIST:
      return action.payload;
    default:
      return statePart;
  }
}

