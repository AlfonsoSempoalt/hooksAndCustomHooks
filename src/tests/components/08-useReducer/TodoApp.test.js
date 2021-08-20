import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('tests to <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn(() => {});

    test('should match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should add a Todo', () => {
        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        });
        expect(wrapper.find('h1').text().trim()).toBe('Todo App (1)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('should delete a Todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleOnDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
    });
});
