import { createStore } from "redux";
import { dataReducer, initialState } from "../reducers/reducer";

export const store = createStore(
  dataReducer,
  { isLoading: false, data: [] },
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("store", store.getState());
