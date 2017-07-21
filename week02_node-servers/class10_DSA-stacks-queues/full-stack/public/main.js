const request = superagent;

const list = document.getElementById('cats');
const addToList = html => {
    const fragment = range.createContextualFragment(html);
    list.appendChild(fragment);
}

const template = ({ name, type }) => `<li>${name} the ${type}</li>`;

const range = document.createRange();

request.get('/cats')
    .then(res => res.body)
    .then(cats => cats.map(template).join(''))
    .then(addToList);

const add = document.getElementById('add-cat');

add.addEventListener('submit', e => {
    e.preventDefault();
    const { elements } = e.target;
    request.post('/cats')
        .send({
            name: elements.name.value,
            type: elements.type.value
        })
        .then(res => res.body)
        .then(template)
        .then(addToList);
});