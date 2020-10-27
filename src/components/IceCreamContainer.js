import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/index";

function IceCreamContainer(props) {
  const { numOfIceCreams, buyIceCream } = props;

  return (
    <div>
      <h2>Number of Ice Creams - {numOfIceCreams}</h2>
      <button onClick={buyIceCream}>Buy Ice Creams</button>
    </div>
  );
}

const mapStateToProps = (state) => {
    const { numOfIceCreams } = state.iceCream
  return {
    numOfIceCreams: numOfIceCreams
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
