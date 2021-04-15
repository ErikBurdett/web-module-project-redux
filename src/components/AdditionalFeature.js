import React from 'react';
import {connect} from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=> props.addFeature(props.feautre.id)}className="button">
        Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = (state) =>{
  return{
    AdditionalFeature: state.AdditionalFeature,
  };
}

export default connect(mapStateToProps, {})(AdditionalFeature);