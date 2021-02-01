// selectors
export const getChosenListId = ({chosenList}) => chosenList;

// action name creator
const reducerName = 'chosenList';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const PICK = createActionName('PICK');

// action creators
export const createActionPick = payload => ({payload, type: PICK });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case PICK:
      return action.payload;
    default:
      return statePart;
  }
}

