import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




// function storeRecipeObj() {
//     //var LocalStorage = require('node-localstorage').LocalStorage;
//     //localStorage = new LocalStorage('./scratch');
//     var currentObj = createRecipeObj();

//     localStorage.setItem(currentObj.name, JSON.stringify(currentObj));
//     console.log(localStorage.getItem(currentObj.name));

// }
class RecipeBox extends React.Component {
    constructor() {
        super();
        this.state = { recipeName: '', recipeList: [], recipes: [{recipe: 'Pap', listOfItems: ['boiling water', 'maze'] }] };
        
    }




    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
        console.log(this.state)
    }
    addNewRecipeObj() {
        var newRecipeObj = {recipe: this.state.recipeName, listOfItems: this.state.recipeList.split(',')};
        var newRecipes = this.state.recipes;
        newRecipes.push(newRecipeObj);
        this.setState({recipes: newRecipes});
        console.log('new state:',this.state);
        this.clearInputBoxes();

    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th><input name={'recipeName'} refs ={'recipeName'} type='text' placeholder={'Please add name here'} onChange={this.handleChange.bind(this)} /></th>
                    </thead>
                    <tbody>
                        <textarea name={'recipeList'} refs={'recipeList'} rows={4} cols={50} placeholder={'Please add ingrediants here and separate them by commas....example: tomato,onion,olive oil'} onChange={this.handleChange.bind(this)}></textarea>
                        <button onClick={this.addNewRecipeObj.bind(this)}>Add Recipe</button>

                    </tbody>
                </table>
            </div>
        )
    }
}





ReactDOM.render(<RecipeBox />, document.getElementById('root'));

