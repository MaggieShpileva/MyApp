const initialState = {
  data: [],
  isLoading: false,
};
export const reducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case "REQUEST_FOTO_START":
      return { ...state, isLoading: true };
    case "REQUEST_FOTO_SUCCESS":
      return { ...state, data: action.payload, isLoading: false };
  }
};
