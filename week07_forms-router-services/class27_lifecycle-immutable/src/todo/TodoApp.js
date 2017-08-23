import React, { PureComponent } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { addTodo, removeTodo, completeTodo, bootstrap } from '../services/todos';

class TodoApp extends PureComponent {

  constructor() {
    super();
    this.state = { 
      todos: bootstrap(),
      title: 'Import Things',
      history: []   
    };
  }

  addTodo = title => {
    const oldTodos = this.state.todos;
    this.setState({ 
      todos: addTodo(oldTodos, title),
      history: [...this.state.history, oldTodos]
    });
  }
  
  removeTodo = todo => {
    const oldTodos = this.state.todos;
    this.setState({ 
      todos: removeTodo(oldTodos, todo),
      history: [...this.state.history, oldTodos]
    });
  }
  
  completeTodo = (todo, complete) => {
    const oldTodos = this.state.todos;
    this.setState({ 
      todos: completeTodo(oldTodos, todo, complete),
      history: [...this.state.history, oldTodos]
    });
  }

  undo = () => {
    const { history } = this.state;
    if(!history.length) return;

    const last = history.pop();
    this.setState({
      todos: last,
      history
    });
  }
  
  render() {
    const { todos, title, history } = this.state;
    return (
      <main>
        <header>
          <h1>Todo App</h1>
          <AddTodo onAdd={this.addTodo}/>
          <input value={title} onChange={({ target }) => this.setState({ title: target.value })}/>
        </header>
        <section>
          <button onClick={this.undo}>Undo</button>
        </section>
        <section>
          <TodoList title={title} todos={todos} 
            onRemove={this.removeTodo}
            onComplete={this.completeTodo}/>
        </section>
        <section>
          <ul>
            {history.map((h, i) => (
              <li key={i}><pre style={{fontSize: '8pt' }}>{JSON.stringify(h)}</pre></li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default TodoApp;
