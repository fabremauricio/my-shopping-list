export const Actions = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};

export const ActionCreators = {
  CreateItem: (title, subtitle) => ({
    type: Actions.CREATE_ITEM,
    payload: {
      title,
      subtitle,
    },
  }),
  DeleteItem: (id) => ({
    type: Actions.DELETE_ITEM,
    payload: {
      id,
    },
  }),
};
