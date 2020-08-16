import React, { useState } from "react";
import { Spring } from "react-spring/renderprops";
function Component2({ toggle }) {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
      {(props) => (
        <div style={props}>
          <div style={c2Style}>
            <h1>Component 2</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque maxime quaerat molestias qui eligendi autem esse distinctio a accusantium excepturi. Nostrum laborum dolorem eligendi! Sapiente repudiandae minus ipsum magni saepe.</p>
            <button style={btn} onClick={toggle}>
              Toggle Component 3
            </button>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Component2;

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0",
};
