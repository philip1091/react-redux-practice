export default function (state = null, action) {
  if(state  === undefined){
    return [];
  }
  if(action.type === 'ACTIVE_CITY'){
    return action.payload;
  }else{
    return state;
  }
}
