import React from 'react';

const TodoItem = React.createClass({
  render() {
    return (
      <li id={this.props.id} className={'todo-list-item ' + (this.props.status ? 'complete' : 'uncomplete')}>
        <span className='id'>{'Task ' + this.props.id + ':'}</span>
        <span className='content' title={this.props.text}>{this.props.text}</span>
      </li>
    );
  }
});

export default TodoItem;