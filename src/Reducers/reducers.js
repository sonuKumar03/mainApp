import {ADD_STORE,USER_LOGIN,USER_LOGOUT} from  './constants'

export  const stores = (state =[],action)=>{
  switch(action.type){
    case ADD_STORE : return [...state,store(state,action)];
    default : return state;
  }
}

export  const store = (state={},action)=>{
  switch(action.type){
    case ADD_STORE: return Object.assign({},state,{
      ...action.payload
    })
    default : return state;
  }
}

export const user = (state={},action)=>{
  switch(action.type){
    case  USER_LOGIN:return Object.assign({},state,{
      ...action.payload
    });
    case USER_LOGOUT:return Object.assign({},state,{
      ...action.payload
    })
    default : return state;
  }
}
