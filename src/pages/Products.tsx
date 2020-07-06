import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions";

type MyProps = {
  data: any,
};
type MyState = { value: string };
class Product extends React.Component<MyProps, MyState> {
  

  render() {
    return <h1>loading...</h1>
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default (Product);
