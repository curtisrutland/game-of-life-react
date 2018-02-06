import React from "react";

const style = {
    width: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center"
};

const ButtonGroup = ({ children }) => (
    <div style={style}>{children}</div>
);

export default ButtonGroup;