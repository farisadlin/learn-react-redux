import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)

  const { numOfCakes, buyCake } = props;

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
      <button onClick={() => buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
    const { numOfCakes } = state.cake
  return {
    numOfCakes: numOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
