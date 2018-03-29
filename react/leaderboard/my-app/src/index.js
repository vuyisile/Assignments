import React from 'react';
import ReactDOM from "react-dom";
import AllTime from "./alltime";
import Recents from "./recents";
import './index.css';

class Main extends React.Component {
    render() {
        return (
            <div>
                <AllTime/>
                <Recents />
            </div>
        )
    }
}


ReactDOM.render(
    <Main />,
    document.getElementById('root')
);