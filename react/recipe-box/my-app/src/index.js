import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';



class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { btnState: true, recipe: '', ingredients: [], recipes: [] };
    }
    currentIndex = 0;
    value;
    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    addNewRecipeObj() {
        var newRecipeObj = { recipe: this.state.recipe, ingredients: this.state.ingredients.split(',') };
        this.state.recipes.splice(this.state.recipes.length, 0, newRecipeObj)
        this.setState({ recipes: this.state.recipes })

        this.storeRecipes();
        this.clearInputBoxes();
    }

    clearInputBoxes() {
        this.refs.recipe.value = '';
        this.refs.ingredients.value = [];
        this.setState({ recipe: '', ingredients: [] });

    }

    storeRecipes() {
        localStorage.setItem("allData", JSON.stringify(this.state.recipes));

    }

    componentDidMount() {
        var oldSate = JSON.parse(localStorage.getItem("allData"));
        if (oldSate) {
            this.setState({ recipes: oldSate })

        }
    }

    changeBtnState() {
        if (this.state.btnState === false) {
            this.setState({ btnState: true });
            console.log("status:", this.state.btnState)
        } else {
            this.setState({ btnState: false });
            console.log("status:", this.state.btnState)
        }
    }

    displayIngredients(index) {
        this.changeBtnState();
        var currentRecipe = this.state.recipes[index];
        var items = currentRecipe.ingredients;
        
        if (this.state.btnState === true && this.state.recipes.indexOf(currentRecipe) === index) {
            this.setState({recipe:currentRecipe.recipe, ingredients:currentRecipe.ingredients})
            this.value = items.map(e => (
                <ol>{'-' + e}</ol>));
        }
        else if (this.state.recipes.indexOf(currentRecipe) !== index) {
            this.value = '';
        }
        else {
            this.value = '';
        }

    }

    deleteRecipe(index) {
        this.changeBtnState();
        var currentRecipe = this.state.recipes[index];
        var recipesList = this.state.recipes;
        recipesList.splice(index, 1);
        this.setState({ recipes: recipesList });
        localStorage.setItem("allData", JSON.stringify(this.state.recipes));
        this.value = '';
    }

    editRecipe(index) {
        this.changeBtnState();
        var currentRecipe = this.state.recipes[index];
        var recipesList = this.state.recipes;

        console.log('list of recipes:', recipesList);
        console.log('current recipe:', this.state.recipe);

        this.value = (<form className={'col-md-6 '} id={"form"}>
                        <input value = {currentRecipe.recipe} type='text' placeholder={'Please add name here'} onChange={this.handleChange.bind(this)} />
                        <textarea value = {this.state.ingredients} rows={4} cols={50} placeholder={'Please add ingrediants here and separate them by commas....example: tomato,onion,olive oil'} onChange={this.handleChange.bind(this)}></textarea>
                        <button className={'btn btn-success'} onClick={this.addNewRecipeObj.bind(this)}>Add Recipe</button>
                    </form>)
        //recipesList.splice(index,1);
        // this.setState({recipes:recipesList});
        // localStorage.setItem("allData", JSON.stringify(this.state.recipes));
        // this.value = '';

    }

    render() {

        return (
            <layer className={'ov-lay'}>
                <div className={'row container z-indx'}>

                    <h1 className={'col-md-12 header  text-color'}>Recipe Box</h1>

                    <form className={'col-md-6 '} id={"form"}>
                        <input className={'col-md-12 marginer'} name={'recipe'} ref={'recipe'} type='text' placeholder={'Please add name here'} onChange={this.handleChange.bind(this)} />
                        <textarea className={'marginer col-md-12 form-control'} name={'ingredients'} ref={'ingredients'} rows={4} cols={50} placeholder={'Please add ingrediants here and separate them by commas....example: tomato,onion,olive oil'} onChange={this.handleChange.bind(this)}></textarea>
                        <button className={'col-md-12 btn btn-success marginer'} onClick={this.addNewRecipeObj.bind(this)}>Add Recipe</button>
                    </form>

                    <div className={'col-md-6 '} id={"btn-panel"} >
                        {this.state.recipes.map(data => (
                            <button className={'col-md-12 btn btn-default marginer'} onClick={() => this.displayIngredients(this.state.recipes.indexOf(data))}>{data.recipe}</button>
                        ))}
                    </div>
                    <h2 className={'col-md-12 header text-color'}>View Recipe</h2>
                    <div className={'col-md-12 container'} id={"display-panel"}>

                        <button className={'col-md-6 btn btn-primary'} onClick={() => this.editRecipe(this.currentIndex)}>Edit</button>
                        <button className={'col-md-6 btn btn-danger'} onClick={() => this.deleteRecipe(this.currentIndex)}>Delete</button>

                        <div >{this.value}</div>
                    </div>
                </div>
            </layer>
        )
    }
}





ReactDOM.render(<RecipeBox />, document.getElementById('root'));

