// TODO: add and export your own actions
import cities from '../data/cities.js';


export function setCities(){
  return{
    type: 'SET_CITIES',
    payload: cities
  }
}

export function selectCity(city){
  // console.log("action",city)
  return{
    type: 'SELECT_CITY',
    payload: city
  }
}

export function setActiveCity(city){
  return{
    type:'ACTIVE_CITY',
    payload: city
  }
}
