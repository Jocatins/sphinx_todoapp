import React, { Component } from 'react';

class AddMenu extends Component {
    state = {  
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMenu(this.state);
        this.setState({
            content: ''
        })
    }
    render() { 
        return ( 
            <div>
            <form onSubmit={this.handleSubmit}>
            <label> Add new item</label>
            <input type="text" onChange={this.handleChange} value={this.state.content} />
            </form>  
            </div>
         );
    }
}
 
export default AddMenu;

