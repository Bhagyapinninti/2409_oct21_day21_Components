import React from "react";

function Gadgets(props) {
  return (
  
     
      <div className="item">
        <img src={props.picURL} alt=""></img>

        <div className="itemDetails">
          <p>Product: {props.product} </p>
          <p>{props.price}</p>
        </div>

      </div>

  
  );
}

export default Gadgets;
