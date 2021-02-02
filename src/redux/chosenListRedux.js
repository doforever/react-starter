// selectors
export const getChosenListId = ({chosenList}) => chosenList;

// action name creator
const reducerName = 'chosenList';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHOOSE_LIST = createActionName('CHOOSE_LIST');
export const CLEAR = createActionName('CLEAR');

// action creators
export const createActionChooseList = payload => ({payload, type: CHOOSE_LIST });
export const createActionClearChoice = payload => ({payload, type: CLEAR});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHOOSE_LIST:
      return action.payload;
    case CLEAR:
      return '';
    default:
      return statePart;
  }
}

