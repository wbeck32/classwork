import { addTodo, bootstrap } from '../todos';

describe('todo actions', () => {
    it('updates list', () => {
        const list = bootstrap();
        const newList = addTodo(list, 'three');
        
        expect(newList).not.toBe(list);
        expect(newList.length).toBe(3);
        expect(newList[0]).toBe(list[0]);
        expect(newList[1]).toBe(list[1]);
        const newTodo = newList[2];
        expect(newTodo.title).toEqual('three');
        expect(newTodo.complete).toBeFalsy();
    });
});