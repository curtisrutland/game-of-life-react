import React from "react";

const style = {
    border: 0,
    margin: "10px 2px",
    color: "white",
    padding: "20px",
    fontSize: "1.2rem",
    width: "200px"
};

const getStyle = backgroundColor => ({ backgroundColor, ...style });

const Button = ({ onClick, text, color }) => (
    <button style={getStyle(color)} onClick={onClick}>{text}</button>
);

export default Button;