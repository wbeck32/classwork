import React, { PureComponent } from 'react';

export default class TodoList extends PureComponent {

  render() {
    const { todos, title, onRemove, onComplete } = this.props;
    console.log('render TodoList')
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <Todo todo={todo} 
                onRemove={onRemove} 
                onComplete={onComplete}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export class Todo extends PureComponent {
  render() {
    const { todo, onRemove, onComplete } = this.props;
    console.log('render of', todo.title);
    return (
      <div>
        <input type="checkbox" 
          checked={todo.complete} 
          onChange={({ target }) => onComplete(todo, target.checked)} />
        <span>{todo.title}</span>
        <button onClick={() => onRemove(todo)}>X</button>
      </div>
    );
  }
}