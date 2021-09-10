import React from 'react';
import Form from './components/Form';
import List from './components/List';
import './index.css';

class App extends React.Component {
    state={
        list: [],
        searchInput: '',
        sort: null
    }
   
    handleSubmit = (value) => {
        const item = {
            id: `${Math.floor(Math.random() * 30)}`,
            value,
            completed: false
        }
       const newList = [...this.state.list, item];
       this.setState({list: newList});
       window.localStorage.setItem('list', JSON.stringify(newList));
    }
    handleToggle = (item) => {
       const newList = this.state.list.map(element => {
           if(element.id === item.id) {
             element.completed = !element.completed;
           }
           return element;
       })
       this.setState({list: newList});
       window.localStorage.setItem('list', JSON.stringify(newList));
    }
    handleRemove = (item) => {
       const newList = this.state.list.filter(element => element.id !== item.id);
       this.setState({list: newList});
       window.localStorage.setItem('list', JSON.stringify(newList));
    }
    handleSearch = (e) => {
       this.setState({searchInput: e.target.value});
    }
    handlePriority = (item, value) => {
      const newList = this.state.list.map(el => {
          if(el.id === item.id){
              el.priority = Number(value);
          }
          return el;
      })
      this.setState({list: newList});
      window.localStorage.setItem('list', JSON.stringify(newList));
    }
    handleSort = () => {
        if(this.state.sort === null) {
          this.setState({sort: true});
        }
        if(this.state.sort === true) {
          this.setState({sort: false})
        }
        if(this.state.sort === false) {
          this.setState({sort: null})
        }
    }
    componentDidMount() {
        const list = JSON.parse(window.localStorage.getItem('list')) || [];
        this.setState({list})
    }
    render() {
        let newList = this.state.list.filter(el => el.value.includes(this.state.searchInput))
          if(this.state.sort !== null) {
            newList = newList.sort((a,b) => {
                return this.state.sort ? a.priority - b.priority : b.priority - a.priority;
            })
          }
        return(
            <div>
                <h2>ToDo App</h2>
                <Form handleSubmit={this.handleSubmit} handleSearch={this.handleSearch}/>
                <List list={newList} handleToggle={this.handleToggle} handleRemove={this.handleRemove} handlePriority={this.handlePriority}/>
                {this.state.list.length > 0 && <button onClick={() => this.handleSort()}>sort</button>}
            </div>
        )
    }
}

export default App