export const ADD_CARD = "ADD_CARD";
export const ADD_LIST = "ADD_LIST";

export function addCard(listId, cardTitle) {
  return {
    type: ADD_CARD,
    listId,
    cardTitle,
  };
}

export function addList(listTitle) {
  return {
    type: ADD_LIST,
    listTitle,
  };
}
