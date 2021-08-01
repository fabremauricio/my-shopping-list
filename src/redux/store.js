import { createStore } from "redux";
import reducer from "./reducer";
import { saveItems } from "./storage";

const store = createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  const { items } = state;
  saveItems(items);
});

export default store;
