import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component{


  render(){
    let slug ="";
    let name = "";
    let address = "";
    let src = ``;

    console.log(this.props.activeCity)

    if(this.props.activeCity){
      slug = this.props.activeCity.slug;
      name = this.props.activeCity.name;
      address = this.props.activeCity.address;
      src = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`
    }



    return(
      <div className="active-city">
        <h3>{name}</h3>
        <p>{address}</p>
        <img src={src} />
      </div>
    )
  }
}


function mapReduxStateToProps(reduxState){
  return{
    activeCity: reduxState.activeCity
  }
}

export default connect(mapReduxStateToProps)(ActiveCity);

