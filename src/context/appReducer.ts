const appReducer = (
  state = { language: "ru" },
  action: { item: { language: string }; type: string }
) => {
  switch (action.type) {
    case "changeLN":
      return {
        language: action.item.language,
      };
    default:
      return state;
  }
};

export default appReducer;
