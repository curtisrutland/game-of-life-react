import React from "react";

const style = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center"
};

const Row = ({ children }) => (
    <div style={style}>
        {children}
    </div>
);

export default Row;