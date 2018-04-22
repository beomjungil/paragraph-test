import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateFormData} from '../actions/bindForm';
import {bindActionCreators} from 'redux';

class TypoForm extends Component {

  handleInputChange = (e) => {
    this.props.updateFormData({
      ...this.props.formData,
      [e.target.name]: e.target.value
    });
    console.log({
      ...this.props.formData,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input type="range"
                 name="fontSize"
                 onChange={this.handleInputChange}
                 min="12"
                 max="24"/>
          <input type="range"
                 name="lineHeight"
                 onChange={this.handleInputChange}
                 min="90"
                 max="180"/>
          <input type="range"
                 name="paragraphWidth"
                 onChange={this.handleInputChange}
                 min="30"
                 max="100"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    formData: state.bindForm
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateFormData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TypoForm);