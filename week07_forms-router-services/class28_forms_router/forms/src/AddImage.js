import React from 'react';

export default function AddImage({ onAdd }) {
    return (
        <section>
            <h4>Add a new image</h4>
            <form onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                const { title, description, url } = form.elements;
                onAdd({ title, description, url });
                form.reset();
            }}>
                <label>title: <input name="title"/></label>
                <label>description: <input name="description"/></label>
                <label>url: <input name="url"/></label>
                <button type="submit">Add</button>
            </form>
        </section>
    );
}