const LOCAL_STOARAGE_ITEMS_KEY = "items";

export function saveItems(items) {
  const json = JSON.stringify(items);
  localStorage.setItem(LOCAL_STOARAGE_ITEMS_KEY, json);
}

export function loadItems() {
  const res = localStorage.getItem(LOCAL_STOARAGE_ITEMS_KEY);
  if (res) {
    return JSON.parse(res);
  } else {
    return [];
  }
}
