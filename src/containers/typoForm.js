import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateFormData} from "../actions/bindForm";

class TypoForm extends Component {

  render() {
    let fontSize, lineHeight, paragraphWidth;

    return (
      <div>
        <form onChange={() => {
          this.props.updateForm({
            fontSize: fontSize.value,
            lineHeight: lineHeight.value,
            paragraphWidth: paragraphWidth.value
          });
          console.log({
            fontSize: fontSize.value,
            lineHeight: lineHeight.value,
            paragraphWidth: paragraphWidth.value
          })
        }
        }>
          <input type="range"
                 min="12"
                 max="24"
                 ref={node => {
                   fontSize = node
                 }}/>
          <input type="range"
                 min="90"
                 max="180"
                 ref={node => {
                   lineHeight = node
                 }}/>
          <input type="range"
                 min="30"
                 max="100"
                 ref={node => {
                   paragraphWidth = node
                 }}/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateForm: data => {
      dispatch(updateFormData(data))
    }
  }
};

export default connect(null, mapDispatchToProps)(TypoForm);