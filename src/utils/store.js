import "firebase/firestore";
import firebase from "../config/firebaseConfig";
const Users = "Users";
const Stores = "Stores";
const db = firebase.firestore();

/**
 *
 * @param store
 * @param uid user id
 */
export const addStore = ( {store, uid} ) => dipatch => {
    console.log(store);
};

/**
 *
 * @param id store id
 * @param info
 * @param uid
 */

export const addService = ({service, id ,uid}) => dipatch => {
  console.log(service);
};
