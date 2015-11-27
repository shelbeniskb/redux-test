import React from 'react';

const TodoOperate = React.createClass({
  getDefaultProps() {
    return {
      handleAddTodo: () => {},
      handleShowToggle: () => {},
      showAll: true
    };
  },

  getInitialState() {
    return {
      value: ''
    };
  },

  handleChange(e) {
    let value = e.target.value;

    this.setState({
      value: value
    });
  },

  handleAddItem() {
    let value = this.state.value;

    if (value === '') {
      return;
    }
    
    this.props.handleAddTodo(value);
    this.setState({
      value: ''
    })
  },

  handleShowToggle() {
    this.props.handleShowToggle();
  },

  render() {
    return (
      <div className='todo-operator'>
        <input className='add-input'
               placeholder='add an item!'
               value={this.state.value}
               onChange={this.handleChange}/>
        <button className='add-button' onClick={this.handleAddItem}>add Item</button>
        <button className='filter-button' onClick={this.handleShowToggle}>{this.props.showAll ? 'shown unfinish' : 'show all'}</button>
      </div>
    );
  }
});

export default TodoOperate;

