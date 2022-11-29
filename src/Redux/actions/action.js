export const requestFotosStart = () => ({
  type: "REQUEST_FOTO_START",
});
export const requestFotosSuccess = (payload) => ({
  type: "REQUEST_FOTO_SUCCESS",
  payload,
});
export const requestFotosFail = () => ({
  type: "REQUEST_FOTO_FAIL",
});
