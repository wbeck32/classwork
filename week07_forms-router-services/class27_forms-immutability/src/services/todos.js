let id = 0;

export function bootstrap() {
  return [
    { id: ++id, title: 'do that one thing', complete: false },
    { id: ++id, title: 'do that other thing', complete: false }
  ];
}

export function addTodo(todos, title) {
  const todo = { id: ++id, title, complete: false }
  return [
    ...todos,
    todo
  ]
}

export function removeTodo(todos, todo) {
  const index = todos.indexOf(todo);
  if (index === -1) return todos;

  return [
    ...todos.slice(0, index),
    ...todos.slice(index + 1)
  ]
}

export function completeTodo(todos, todo, complete) {
  const index = todos.indexOf(todo);
  if (index === -1) return todos;

  const newTodo = {
    ...todo,
    complete
  }

  return [
    ...todos.slice(0, index),
    newTodo,
    ...todos.slice(index + 1)
  ]
}

