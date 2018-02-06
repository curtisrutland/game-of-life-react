import React from "react";
import Grid from './components/Grid';
import Row from "./components/Row";
import Cell from "./components/Cell";

const ExampleGrid = () => (
    <Grid>
        <Row>
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
        </Row>
        <Row>
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
        </Row>
        <Row>
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
        </Row>
        <Row>
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
        </Row>
        <Row>
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
        </Row>
        <Row>
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
            <Cell clickable={false} />
            <Cell clickable={false} living />
        </Row>
    </Grid>
);

export default ExampleGrid;