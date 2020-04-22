import { USER_LOGIN, ADD_STORE, ADD_SERVICE } from "./constants";

export const userLogin = payload => {
  return { type: USER_LOGIN, ...payload };
};

export const userLogout = payload => {
  return { type: USER_LOGIN, ...payload };
};

export const addStore = payload => {
  return { type: ADD_STORE,payload };
};
export const addService = payload => {
  return { type: ADD_SERVICE, payload };
};

// UI creators