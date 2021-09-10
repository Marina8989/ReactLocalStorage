import React from 'react';
import Form from './components/Form';

class App extends React.Component {
    state={
        list: []
    }
    handleSubmit = (value) => {
       const newList = [...this.state.list, value];
       this.setState({list: newList});
    }
    render() {
        return(
            <div>
                <h2>ToDo App</h2>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App