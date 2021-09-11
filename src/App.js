import React from 'react';
import Form from './components/Form';
import List from './components/List';
import Search from './components/Search';
import './index.css';


class App extends React.Component{
    state={
        list: [],
        searchInput: ''
    }
    // setInStorage = (list) => {
    //    localStorage.setItem('list', JSON.stringify(list))
    // }
    handleSubmit = (value) => {
      const item = {
          id: `${Math.floor(Math.random() * 50)}`,
          value,
          completed: false
      }
      const newList = [...this.state.list, item];
      this.setState({list: newList});
    }
    handleToggle = (item) => {
       const newList = this.state.list.map(element => {
           if(element.id === item.id) {
              element.completed = !element.completed;
           }
           return element;
       })
       this.setState({list: newList});
    }
    handleRemove = (item) => {
       const newList = this.state.list.filter(element => element.id !== item.id);
       this.setState({list: newList});
    }
    handleChange = (e) => {
       this.setState({searchInput: e.target.value});
    }
    // componentDidMount(){
    //    const list = JSON.parse(localStorage.getItem('list')) || [];
    //    this.setState({list})
    // }
    render(){
        let newList = this.state.list.filter(item => item.value.includes(this.state.searchInput))
        return(
            <div>
                <Form handleSubmit={this.handleSubmit} />
                <Search handleChange={this.handleChange} />
                <List list={newList} handleToggle={this.handleToggle} handleRemove={this.handleRemove} />
            </div>
        )
    }
}

export default App