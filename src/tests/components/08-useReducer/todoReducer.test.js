import { expect, describe } from '@jest/globals';
import todoReducer from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../fixtures/demoTodos';
import { todoHandlers } from '../fixtures/todoHandlers';

describe('test to todoReducer', () => {
    test('should return the default state', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('should add a todo', () => {
        const newTodo = {
            id: 3,
            desc: 'hola mundo',
            done: false,
        };
        const { handleAddTodo } = todoHandlers();
        const state = todoReducer(demoTodos, handleAddTodo(newTodo));
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('should delete a todo', () => {
        const { handleOnDelete } = todoHandlers();
        const state = todoReducer(demoTodos, handleOnDelete(2));
        expect(state).toEqual([demoTodos[0]]);
    });

    test('should change to toggle the TODO', () => {
        const { handleToggle } = todoHandlers();
        const state = todoReducer(demoTodos, handleToggle(1));
        expect(state[0].done).toEqual(true);
    });
}); 
