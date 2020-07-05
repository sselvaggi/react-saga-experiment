import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions";

type MyProps = {
  requestApiData: ()=>{},
  data: any,
};
type MyState = { value: string };
class Home extends React.Component<MyProps, MyState> {
  componentDidMount() {
    this.props.requestApiData();
  }


  render() {
    const { results = [] } = this.props.data;
    return results.length
      ? <h1>Product
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
