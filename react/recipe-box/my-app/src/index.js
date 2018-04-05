import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function createRecipeObj(name,recipe){
    const reci = document.getElementById('recipe').value;
    const list = document.getElementById('list').value;
    console.log({name: reci, recipe: list.split(',')});
    
    return {name: reci, recipe: list.split(',')}

}
class RecipeBox extends React.Component {
    constructor() {
        super();
        this.state = { data: [{ name: 'Pap', recipe: ['boiling water', 'maze'] }] }
    }
 addRecipe(val){
    val = createRecipeObj();
    this.setState({data:this.state.data.push(val)});
    console.log(this.state.data)
 }
  
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <input id= {'recipe'} type={'text'} placeholder={'Please add name here'} />
                    </thead>
                    <tbody>
                        <textarea id = {'list'} rows={"4"} cols={"50"} placeholder={'Please add ingrediants here and separate them by commas....example: tomato,onion,olive oil'}></textarea>
                        <button onClick = {this.addRecipe.bind(this)}>Add Recipe</button>
          
                    </tbody>
                </table>
            </div>
        )
    }
}





ReactDOM.render(<RecipeBox />, document.getElementById('root'));

