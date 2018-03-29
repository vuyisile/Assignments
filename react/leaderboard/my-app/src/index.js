import React from 'react';
import ReactDOM from "react-dom";
import AllTime from "./alltime";
import Recents from "./recents";
import './index.css';

class Main extends React.Component {
    
    showTbl(allTime,recent){
        var color = document.getElementById('show').style.backgroundColor;
        console.log(color)
          if(this.color ==='blue'){
            this.color = 'green';
            return allTime;
          }else if(this.color === 'green'){
            this.color = 'blue';
            return recent;
          }
        
    }
    render() {
        return (
            <div>
        <button id={'show'}onClick = {val =>{return val === this.showTbl(<AllTime/>,<Recents/>)}}>Change Tbl</button>
            </div>
        )
    }
}


ReactDOM.render(
    <Main />,
    document.getElementById('root')
);