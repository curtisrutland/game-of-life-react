import React from "react";

const style = {
    width: "25px",
    height: "25px",
    border: "1px black solid"
};

const getStyle = living => ({
    backgroundColor: living ? "black" : "white",
    ...style
});

const Cell = ({ living, clickable = true, onClick }) => (
    <div
        style={getStyle(living)}
        onClick={() => { if (clickable) onClick(); }} >
    </div>
);

export default Cell;