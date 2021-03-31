import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';

// State and reducers
import citiesReducer from './reducers/cities_reducer.js';
import selectedCityReducer from './reducers/selected_city_reducer.js';
import activeCityReducer from './reducers/active_city_reducer.js';
const reducers = combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer,
  activeCity: activeCityReducer
});

// render an instance of the component in the DOM
import App from './components/app';
ReactDOM.render(
<Provider store={createStore(reducers)}>
  <App />
</Provider>,
document.getElementById('root')
);

