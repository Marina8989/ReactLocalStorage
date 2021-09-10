import React from 'react';

class Form extends React.Component {
    state={
        inputValue: ''
    }
    handleChange = (e) => {
       this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
       e.preventDefault();
       const value = this.state.inputValue;
       this.setState({inputValue: ''});
       this.props.handleSubmit(value);
    }
    render() {
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input placeholder={"Enter value..."} value={this.state.inputValue} onChange={this.handleChange} style={{border: '1px solid green'}}/>
            </form>
            <input onChange={this.props.handleSearch} placeholder={"Search value..."} style={{border: '1px solid green'}}/>
           </>
        )
    }
}

export default Form