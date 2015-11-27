import React from 'react';
import _ from 'lodash'
import TodoItem from './TodoItem';

const TodoList = React.createClass({
  getDefaultProps() {
    return {
      handleSelectItem: () => {},
      showAll: true
    };
  },

  handleSelectItem(e) {
    let id = parseInt(e.target.id);

    if (isNaN(id)) {
      return;
    }

    this.props.handleSelectItem(id);
  },
  render() {
    let {items, showAll} = this.props,
        finalItems = showAll ? items : _.where(items, {status: false});

    return (
      <ul className='todo-list-container'
          onClick={this.handleSelectItem}>
        {
          (finalItems || []).map((item, i) => {
            return (
              <TodoItem text={item.text}
                        status={item.status}
                        id={item.index}
                        key={`item-id-${i + 1}`}/>
            )
          })
        }
      </ul>
    );
  }
});

export default TodoList;