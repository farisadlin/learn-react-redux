import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  const { item, buyItem } = props;
  return (
    <div>
      <h2>Item - {item}</h2>
      <button onClick={buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { numOfCakes } = state.cake;
  const { numOfIceCreams } = state.iceCream;
  const { cake } = ownProps;

  const itemState = cake ? numOfCakes : numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { cake } = ownProps;

  const dispatchFunction = cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

    return {
        buyItem: dispatchFunction
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
