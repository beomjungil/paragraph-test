import {connect} from 'react-redux';
import Paragraph from '../components/paragraph';



const mapStateToProps = state => {
  return {
    fontSize: state.bindForm.fontSize,
    lineHeight: state.bindForm.lineHeight,
    paragraphWidth: state.bindForm.paragraphWidth
  }
};


const TypoParagraph = connect(mapStateToProps)(Paragraph);

export default TypoParagraph;
