import { connect } from "react-redux";
import Text from "../components/Text";

const mapStateToProps = (state) => {
  return {
    index: state.index,
    author: state.author,
    text: state.text,
  };
};
export default connect(mapStateToProps)(Text);
