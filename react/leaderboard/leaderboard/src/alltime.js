import React from 'react';
import Axios from 'axios';


export default class Alltime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: []}
    }
    
    
    componentDidMount() {
        Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(response => {
                this.setState({ data: response.data })

            })
            .catch(error => {
                return error;
            });
    }

    render() {
        return (<table name="all-time">
            <thead>
                <th>{'#'}</th>
                <th>{'Camper Name'}</th>
                <th>{'Points in 30 days'}</th>
                <th>{'All-time points'}</th>
            </thead>
            {this.state.data.map(data => (
                <tbody>
                    <td>{this.state.data.indexOf(data)+1}</td>
                    <td><a href={`https://www.freecodecamp.org/${data.username}`}><img src={data.img} alt={""} />{data.username}</a></td>
                    <td>{data.recent}</td>
                    <td>{data.alltime}</td>
                </tbody>
            ))}




        </table>)
    }

}
