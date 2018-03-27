import React from 'react';
import ReactDOM from "react-dom";
import AllTimer from "./main";
import Recents from "./recents";

class Main extends React.Component {
    render() {
        return (
            <div>
                <AllTimer/>
                <Recents />
            </div>
        )
    }
}


ReactDOM.render(
    <Main />,
    document.getElementById('root')
);