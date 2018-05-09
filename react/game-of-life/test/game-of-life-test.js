var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');
var gameOfLife = require('../game-of-life');

describe('test game-of-life', function () {
    it('when the grid is seeded with initial live cells, only those cells are alive and the rest are dead', function () {
        var initialAliveCells = [{ 'x': 0, 'y': 1, isAlive: true }, { 'x': 0, 'y': 2, isAlive: true }, { 'x': 0, 'y': 3, isAlive: true }];
        var initialGrid = gameOfLife.setInitialGeneration(initialAliveCells);


        for (var aliveCell of initialAliveCells) {
            var cellInGrid = initialGrid.find(c => c.x === aliveCell.x && c.y === aliveCell.y);
            expect(cellInGrid.isAlive).to.be.true;
        }

        var deadCells = initialGrid.filter(c => !c.isAlive);

        expect(deadCells.length).to.eql(initialGrid.length - initialAliveCells.length);


    })

    it('A dead cell with three live neighbours come to life in the next generation', function () {
        var initialAliveCells = [{ 'x': 0, 'y': 1, isAlive: true }, { 'x': 0, 'y': 2, isAlive: true }, { 'x': 0, 'y': 3, isAlive: true }];
        var initialGrid = gameOfLife.setInitialGeneration(initialAliveCells);
        var neighbours = gameOfLife.getNeighbours(initialGrid);
        var newAliveCells = gameOfLife.createNewGeneration(neighbours, initialGrid);
        var cellInGrid =  newAliveCells.filter(function(c){return c.isAlive === true} );
        
    
            expect(cellInGrid).to.be.eql([{ 'x': -1, 'y': 2, isAlive: true },{ 'x': 0, 'y': 2, isAlive: true },{ 'x': 1, 'y': 2, isAlive: true }]);
       
       
    });
})