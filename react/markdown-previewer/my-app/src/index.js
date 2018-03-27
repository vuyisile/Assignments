import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import marked from 'marked'
class MarkdownViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    render() {
        console.log(this.state)
        return (
            <div className='row'>
                <div className='col-sm-12 header'>Markdown Previewer</div>
                <textarea className='col-sm-11' id='input' onChange={this.handleChange.bind(this)} />
                <div className='col-sm-11 iframe' dangerouslySetInnerHTML={{ __html: marked(this.state.value) }}></div>

            </div>
        )
    }
}



ReactDOM.render(<MarkdownViewer />, document.getElementById('root'));
