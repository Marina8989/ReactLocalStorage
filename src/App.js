import React from 'react';
import Form from './components/Form';
import List from './components/List';
import './index.css';

class App extends React.Component {
    state={
        list: []
    }
    // setInStorage = (list) => {
    //   window.localStorage.setItem('list', JSON.stringify(list));
    // }
    handleSubmit = (value) => {
        const item = {
            id: `${Math.floor(Math.random() * 30)}`,
            value,
            completed: false
        }
       const newList = [...this.state.list, item];
       this.setState({list: newList});
       //this.setInStorage(newList);
    }
    handleToggle = (item) => {
       const newList = this.state.list.map(element => {
           if(element.id === item.id) {
             element.completed = !element.completed;
           }
           return element;
       })
       this.setState({list: newList});
       //this.setInStorage(newList)
    }
    handleRemove = (item) => {
       const newList = this.state.list.filter(element => element.id !== item.id);
       this.setState({list: newList});
       //this.setState(newList);
    }
    // componentDidMount() {
    //     this.setState({
    //         list: JSON.parse(window.localStorage.getItem('list')) || []
    //     })
    // }
    render() {
        return(
            <div>
                <h2>ToDo App</h2>
                <Form handleSubmit={this.handleSubmit} />
                <List list={this.state.list} handleToggle={this.handleToggle} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default App