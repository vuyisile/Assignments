import React from 'react';
import Axios from 'axios';

export default class Recents extends React.Component {
    constructor() {
        super();
        this.state = { data: [] }
    }

    componentDidMount() {
        Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(respon => {
                this.setState({ data: respon.data })
                console.log(this.state.data)
                console.log(respon.data)
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (<div>

            {this.state.data.map(data => (<h1>{data.username}</h1>))}



        </div>)
    }







}
