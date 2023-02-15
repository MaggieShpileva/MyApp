export type DataState = {
  data: any;
  isLoading: Boolean;
};

export const initialState: DataState = {
  data: [],
  isLoading: false,
};

export const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "REQUEST_FOTO_START":
      return { ...state, isLoading: true };
    case "REQUEST_FOTO_SUCCESS":
      return { ...state, data: action.payload, isLoading: false };
    case "REQUEST_FOTO_FAIL":
      return { ...state, isLoading: false };
  }
};
