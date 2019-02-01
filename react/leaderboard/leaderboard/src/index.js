import React from 'react';
import ReactDOM from "react-dom";
import AllTime from "./alltime";
import Recents from "./recents";
import Home from "./home"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';



class Main extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div class="dropdown">
                        <button class="dropbtn">View Tables</button>
                        <div class="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="/all-time">All Time</Link>
                            <Link to="/recent">Recent</Link>
                        </div>
                        <div>
                            <Route path="/" component={Home} />
                            <Route path="/all-time" component={AllTime} />
                            <Route path="/recent" component={Recents} />
                        </div>
                    </div>

                    <div id={'tbl'}></div>
                </div>
            </Router>
        )
    }
}




ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
