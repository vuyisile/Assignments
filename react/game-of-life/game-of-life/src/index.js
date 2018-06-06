import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { setInitialGeneration, getNeighbours, createNewGeneration, createGrid } from "./game-of-life";
import { pickRandom} from "./randomPatterns";

class GameOfLife extends React.Component {
    constructor() {
        super()
        this.state = { speed: 50,gameOn: {}, grid: [], currentGen: [] , standardGridLength: 10, hiddenGridLength: 30, generationCount: 0}
    }

    componentDidMount() {
        var counter = this.state.generationCount;
        var time = this.state.speed;
        var onlyTrue = pickRandom()
        var validGrid = setInitialGeneration(this.state.standardGridLength,onlyTrue);
        this.setState({ gameOn: validGrid , currentGen:onlyTrue});
        this.setState({
            gameOn: setInterval(() => {
                this.setState({generationCount:counter++})
                this.start(this.state.currentGen)
            }, 50)
        });
    }


    start(alive) {
        var grid = setInitialGeneration(this.state.hiddenGridLength,alive);
        var neigbourHood = getNeighbours(grid);
        var changedGrid = createNewGeneration(neigbourHood, grid);
        var onlyTrue = changedGrid.filter(function (c) { return c.isAlive === true });
        var validGrid = setInitialGeneration(this.state.standardGridLength,onlyTrue);
        this.setState({ currentGen: onlyTrue, grid:validGrid })
        var generation = this.state.currentGen
        if (generation.length === 0) {
            this.setState({ gameOn: clearInterval(this.state.gameOn) });
        }
        return this.state.currentGen
    }

    play() {
        var counter = this.state.generationCount;
        var time = this.state.speed;
        this.setState({
            gameOn: setInterval(() => {
                this.setState({generationCount:counter++})
                this.start(this.state.currentGen)
            }, time),
        });
    }
   
    seedWithRandom(){
        var aliveOnly = pickRandom()
        var counter = this.state.generationCount;
       var time = this.state.speed;
       console.log('time:',this.state.speed)
        this.setState({currentGen:aliveOnly});
        this.setState({
            gameOn: setInterval(() => {
                this.setState({generationCount:counter++})
                this.start(this.state.currentGen)
            }, time)
        });
    }
    
    clearBoard() {
        this.setState({generationCount:0, currentGen: [], grid: createGrid(10), gameOn: clearInterval(this.state.gameOn) });
    }

    pause() {
        this.setState({ gameOn: clearInterval(this.state.gameOn) });
    }

    seed(id) {
        var listOfIds = this.state.currentGen;
        if(id.isAlive === false){
            id.isAlive = true;
            listOfIds.push(id);
        }
        
        this.setState({ currentGen: listOfIds})

        if(this.state.generationCount === 0){
        this.setState({generationCount:+1 })
            
        }
    }

    // increaseSpeed(){
    //     // var time = this.state.speed;      
    //     this.setState({speed:this.state.speed-100})
    //     if(this.state.speed === 100){
    //         this.setState({speed:100})  
    //     }
    // }

    // decreaseSpeed(){
    //     //var time = this.state.speed;      
    //     this.setState({speed:this.state.speed+100})
    // }

    render() {
        console.log(this.state.currentGen)
        return (

            <div>
                <center><h1 className={'text-light'}>GameOfLife</h1></center>

                <div className={'row col-md-12 container'}>
                    <button className={'btn btn-success col-md-2'} onClick={this.play.bind(this)}>Play</button>
                    <button className={'btn btn-primary col-md-2'} onClick={this.pause.bind(this)}>Pause</button>
                    <button className={'btn btn-danger col-md-2'} onClick={this.clearBoard.bind(this)}>Clear</button>
                    <button className={'btn btn-light col-md-2'} onClick={this.seedWithRandom.bind(this)}>Play Random</button>
                    <h5 className={'col-md-3'}>Generation:{this.state.generationCount}</h5>
                    {/* <button className={'down-arrow col-md-1'} onClick={this.decreaseSpeed.bind(this)}>-</button>
                    <h5 className = {'col-md-1'}>{this.state.speed}</h5>
                    <button className={'up-arrow col-md-1'} onClick={this.increaseSpeed.bind(this)}>+</button> */}
                </div>
                <div className={'container grid row col-md-12'}>
                    {this.state.grid.map((cell) => <button className={`cell ${cell.isAlive}`} onClick={() => this.seed(cell)} key={`${cell.x},${cell.y}`}></button>)}
                </div>

            </div>
        )
    }

}
// =======================================================================================================================================================================================================================================

ReactDOM.render(
    <GameOfLife />,
    document.getElementById('root')
);
