import { RootState } from "../../types";

export const selectMyDataLoading = (state: RootState) => {
  return state?.myData?.isLoading;
};

export const selectMyData = (state: RootState) => {
  return state?.myData;
};
