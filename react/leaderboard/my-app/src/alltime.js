import React from 'react';
import Axios from 'axios';


export default class Alltime extends React.Component {
    constructor() {
        super();
        this.state = { data: [] }
    }
    i = 0;
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
        return (<table>
            <thead>
                <th>{'#'}</th>
                <th>{'Camper Name'}</th>
                <th>{'Points in 30 days'}</th>
                <th>{'All-time points'}</th>
            </thead>
            {this.state.data.map(data => (
                <tbody>
                    <td>{this.i++}</td>
                    <td><a href={`https://www.freecodecamp.org/${data.username}`}><img src={data.img} alt={""} />{data.username}</a></td>
                    <td>{data.recent}</td>
                    <td>{data.alltime}</td>
                </tbody>
            ))}




        </table>)
    }







}
