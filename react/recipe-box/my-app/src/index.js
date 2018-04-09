import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class RecipeBox extends React.Component {
    constructor() {
        super();
        this.state = { lsFromLocalStorage: [], recipeName: '', recipeList: [], recipes: [{ recipe: '', listOfItems: [] }] };
    }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    addNewRecipeObj() {
        var newRecipeObj = { recipe: this.state.recipeName, listOfItems: this.state.recipeList.split(',') };
        this.state.recipes.splice(this.state.recipes.length, 0, newRecipeObj)
        this.setState({ recipes: this.state.recipes })
        console.log("recipes", this.state.recipes)
        this.storeRecipes();
        this.clearInputBoxes();
    }

    clearInputBoxes() {
        this.refs.recipeName.value = '';
        this.refs.recipeList.value = [];
        this.setState({ recipeName: '', recipeList: [] });
        console.log('cleared input boxes');
    }

    storeRecipes() {
        localStorage.setItem("allData", JSON.stringify(this.state.recipes));
        console.log('new state:', this.state);
    }
    
    componentDidMount() {
        var oldSate = JSON.parse(localStorage.getItem("allData"));
        if (oldSate) {
            this.setState({ recipes: oldSate })
            console.log(this.state.recipes);
        }
    }

    render() {

        return (
            <div>
                <table>
                    <thead>
                        <th><input name={'recipeName'} ref={'recipeName'} type='text' placeholder={'Please add name here'} onChange={this.handleChange.bind(this)} /></th>
                    </thead>
                    <tbody>
                        <textarea name={'recipeList'} ref={'recipeList'} rows={4} cols={50} placeholder={'Please add ingrediants here and separate them by commas....example: tomato,onion,olive oil'} onChange={this.handleChange.bind(this)}></textarea>
                        <button onClick={this.addNewRecipeObj.bind(this)}>Add Recipe</button>

                    </tbody>
                </table>
            </div>
        )
    }
}





ReactDOM.render(<RecipeBox />, document.getElementById('root'));

