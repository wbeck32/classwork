import React from 'react';

export default function AddTodo({ onAdd }) {
    console.log('render of AddTodo')
    return (
        <section>
            <h4>Add a new todo</h4>
            <form onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                const { title } = form.elements;
                onAdd(title.value);
                form.reset();
            }}>
                <input name="title"/>
                <button type="submit">Add</button>
            </form>
        </section>
    );
}
