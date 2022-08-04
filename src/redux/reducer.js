import { ADD_CARD, ADD_LIST } from "./actions";

const initialState = {
  lists: {
    "01list": {
      id: "01list",
      title: "To Do",
      cards: [
        {
          id: "01card",
          title: "comprar lechuga",
        },
        {
          id: "02card",
          title: "comprar tomates",
        },
        {
          id: "03card",
          title: "comprar aceite",
        },
      ],
    },
    "02list": {
      id: "02list",
      title: "In progress",
      cards: [],
    },
  },
  listIds: ["01list", "02list"],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD: {
      const { listId, cardTitle } = action;
      const list = state.lists[listId];
  
      list.cards.push({ id: Date.now() + "", title: cardTitle });
      const newListsObject = { ...state.lists, [listId]: list };
      return Object.assign({}, state, {
        lists: newListsObject,
        listIds: Object.keys(newListsObject),
      });
    }
    case ADD_LIST: {
      const { listTitle } = action;
      const newListId = Date.now() + ""
      const newListsObject = {
        ...state.lists,
        [newListId] : {
          id: newListId ,
          title: listTitle,
          cards: [],
        },
      };

      return Object.assign({}, state, {
        lists: newListsObject,
        listIds: Object.keys(newListsObject),
      });
    }
    default:
      return state;
  }
}
