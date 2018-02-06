import React from "react";

const style = {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center"
};

const Grid = ({ children }) => (
    <div style={style}>
        {children}
    </div>
);

export default Grid;