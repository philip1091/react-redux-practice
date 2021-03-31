import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component{

  handleClick = () =>{
    this.props.selectCity(this.props.city.name)
    this.props.setActiveCity(this.props.city)
    console.log(this.props.setActiveCity())
  }



  render(){

  let classes = "list-group-item";

  if(this.props.city.name === this.props.selectedCity){
    classes += " selected";
  }



    return(
      <div className={classes} onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    )
  }
}

import { selectCity } from '../actions';
import { setActiveCity } from '../actions';

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectCity: selectCity,
    setActiveCity: setActiveCity
  },dispatch);
}

function mapReduxStateToProps(reduxState){
  return{
    selectedCity: reduxState.selectedCity
  }
}

export default connect(mapReduxStateToProps,mapDispatchToProps)(City);
