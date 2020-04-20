import  firebase from  '../config/firebaseConfig'
import 'firebase/auth'
import {userLogin} from '../Reducers/creators'
import history from './history';

//for adding user to the firbase
export const  addUser = ({email,password})=>dispatch=>{
    firebase.auth().createUserWithEmailAndPassword(email,password).then((data)=>{
        dispatch(userLogin({payload:data.user.uid}));
    }).catch((err)=>{ console.log(err) })   ;
}
export const loginUser = ({email,password})=>dispatch=>{
    // log the user and save the uid in the store
    firebase.auth().signInWithEmailAndPassword(email,password).then((data)=>{
        console.log(data.user.uid);
        const uid = data.user.uid;
        userLogin({payload:uid});
        dispatch(userLogin({payload:{uid,isLoggedIn:true}}));
        history.push('/dashboard');
    }).catch((err)=>{console.log(err) });
}