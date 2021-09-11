import React from 'react';
import Form from './components/Form';
import List from './components/List';
import Search from './components/Search';
import Sort from './components/Sort';
import './index.css';


class App extends React.Component{
    state={
        list: [],
        searchInput: '',
        sort: null
    }
    // setInStorage = (list) => {
    //    localStorage.setItem('list', JSON.stringify(list))
    // }
    handleSubmit = (value) => {
      const item = {
          id: `${Math.floor(Math.random() * 50)}`,
          value,
          completed: false,
          priority: 1
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
    handlePriority = (item, value) => {
        const newList = this.state.list.map(element => {
            if(element.id === item.id) {
               element.priority = Number(value);
            }
            return element;
        })
        this.setState({list: newList})
        console.log(this.state.list)
    }
    handleSort = () => {
        if(this.state.sort === null) {
           this.setState({sort: true})
        }
        if(this.state.sort === true) {
          this.setState({sort: false})
        }
        if(this.state.sort === false) {
           this.setState({sort: null})
        }
    }
    // componentDidMount(){
    //    const list = JSON.parse(localStorage.getItem('list')) || [];
    //    this.setState({list})
    // }
    render(){
        let newList = this.state.list.filter(item => item.value.includes(this.state.searchInput)).sort((a,b) => {
            if(this.state.sort !== null) {
             return a.priority - b.priority;
            }else {
                return b.priority - a.priority;
            }
        })
        return(
            <div>
                <Form handleSubmit={this.handleSubmit} />
                <Search handleChange={this.handleChange} />
                <List list={newList} handleToggle={this.handleToggle} handleRemove={this.handleRemove} handlePriority={this.handlePriority}/>
                {this.state.list.length > 0 && <Sort handleSort={this.handleSort} />}
            </div>
        )
    }
}

export default App