import React from 'react';
import Axios from 'axios';

export default class Recents extends React.Component {
    constructor() {
        super();
        this.state = { data: [] }
    }
    i = 1;
    componentDidMount() {
        Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(response => {
                this.setState({ data: response.data })
                console.log(this.state.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (<table>
            <thead>
                <th>{'#'}</th>
                <th>{'Camper Name'}</th>
                <th>{'All-time Points'}</th>
                <th>{'Recent Points'}</th>
            </thead>
            {this.state.data.map(data => (


                <tbody>
                    <td>{this.i++}</td>
                    <td><a href={`https://www.freecodecamp.org/${data.username}`} ><img src={data.img} alt={""} />{data.username}</a></td>
                    <td>{data.alltime}</td>
                    <td>{data.recent}</td>
                </tbody>
            ))}
        </table>
        )
    }







}
