import { Actions } from "./actions";
import { v4 as uuid } from "uuid";
import { loadItems } from "./storage";

const INITIAL_STATE = {
  items: loadItems(),
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  const handler = Handlers[type];

  if (handler) {
    return handler(state, payload);
  } else {
    return state;
  }
}

const Handlers = {
  [Actions.CREATE_ITEM](state, { title, subtitle }) {
    console.log("called");
    const item = {
      title,
      subtitle,
      id: uuid(),
    };

    console.log(item);

    return {
      ...state,
      items: [...state.items, item],
    };
  },
  [Actions.DELETE_ITEM](state, { id }) {
    return {
      ...state,
      items: state.items.filter((e) => e.id !== id),
    };
  },
};
