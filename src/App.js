import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';
import Row from "./components/Row";
import Cell from "./components/Cell";
import GameOfLife from "./helpers/game";
import ButtonGroup from './components/ButtonGroup';
import Button from './components/Button';

const styles = {
    header: {
        marginTop: "2rem",
        textAlign: "center"
    },
    colors: {
        blue: "hsl(217, 71%, 53%)",
        teal: "hsl(171, 100%, 41%)",
        red: "hsl(348, 100%, 61%)"
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        const rows = 25;
        const cols = 25;
        const board = GameOfLife.createEmptyBoard(rows, cols);
        this.state = { board, rows, cols, generations: 0, clickable: true, auto: false };
    }

    handleCellClick = (row, col) => {
        const board = GameOfLife.toggleCell(this.state.board, row, col);
        this.setState({ board });
    }

    handleRunGenerationClick = () => {
        this.runGeneration();
    }

    handleAutoRunClick = () => {
        if (!this.state.auto) {
            this.run();
        } else {
            this.stop();
        }
    }

    run() {
        this.setState({ auto: true, clickable: false });
        this.runGeneration();
        this.intervalId = setInterval(() => this.runGeneration(), 500);
    }

    stop(state) {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            console.log("cleared");
        }
        this.setState({ auto: false, clickable: true, ...state });
    }

    handleResetClick = () => {
        const board = GameOfLife.createEmptyBoard(this.state.rows, this.state.cols);
        clearInterval(this.intervalId);
        this.setState({ board, generations: 0, auto: false, clickable: true });
    }

    runGeneration() {
        console.log("run generation");
        const board = GameOfLife.runGeneration(this.state.board);
        if (GameOfLife.isEmptyBoard(board)) {
            console.log("stopping");
            this.stop({ board, generations: this.state.generations + 1 });
        }
        else
            this.setState({ board, generations: this.state.generations + 1 });
    }

    renderRow(row, rowIdx) {
        const result = [];
        const { cols, clickable } = this.state;
        for (let i = 0; i < cols; i++) {
            result.push(<Cell key={i} living={row[i]} onClick={() => this.handleCellClick(rowIdx, i)} clickable={clickable} />);
        }
        return result;
    }

    renderGame() {
        const { board, rows } = this.state;
        const result = [];
        for (let i = 0; i < rows; i++) {
            let cells = this.renderRow(board[i], i);
            result.push(<Row key={i} children={cells} />)
        }
        return result;
    }

    render() {
        return (
            <div className="app">
                <h1 style={styles.header}>Game of Life</h1>
                <h3 style={styles.header}>Generation: {this.state.generations}</h3>
                <Grid>
                    {this.renderGame()}
                </Grid>
                <ButtonGroup>
                    <Button color={styles.colors.blue} text="Run Generation" onClick={this.handleRunGenerationClick} />
                    <Button color={styles.colors.teal} text={this.state.auto ? "Stop" : "Auto Run"} onClick={this.handleAutoRunClick} />
                    <Button color={styles.colors.red} text="Reset Game" onClick={this.handleResetClick} />
                </ButtonGroup>
            </div >
        );
    }
}

export default App;
