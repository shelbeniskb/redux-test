import React from 'react';
import TodoOperate from './components/TodoOperate';
import TodoList from './components/TodoList';
import Store from './components/store';
import Action from './components/action';
import {saveData, fetchData} from './components/server';

const App = React.createClass({
  getInitialState() {
    return ({
      showAll: true
    });
  },

  handleAddTodo(value) {
    Store.dispatch(Action.AddItem(value));
    saveData(Store.getState());
    this.forceUpdate();
  },

  handleSelectItem(id = 0) {
    let todos = Store.getState().todos,
        todo = todos[id];

    Store.dispatch(Action.ChangeStatus(id, !todo.status));
    saveData(Store.getState());
    this.forceUpdate();
  },

  handleShowToggle() {
    this.setState({
      showAll: !this.state.showAll
    });
  },

  render() {
    let state = Store.getState();
    fetch('http://localhost:3000/hello.txt').then(function(data){
      console.log(data)
    });


    return (
      <div className='main-container'>
        <TodoOperate handleAddTodo={this.handleAddTodo}
                     showAll={this.state.showAll}
                     handleShowToggle={this.handleShowToggle}/>
        <TodoList items={state.todos}
                  showAll={this.state.showAll}
                  handleSelectItem={this.handleSelectItem}/>
      </div>
    );
  }
});

React.render(<App/>, document.body);