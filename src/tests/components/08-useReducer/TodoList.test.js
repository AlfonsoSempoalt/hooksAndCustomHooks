import React from 'react';
import { shallow } from 'enzyme';
import { demoTodos } from '../fixtures/demoTodos';
import TodoList from '../../../components/08-useReducer/TodoList';

describe('Name of the group', () => {
    const handleToggle = jest.fn();
    const handleOnDelete = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            handleToggle={handleToggle}
            handleOnDelete={handleOnDelete}
        />
    );

    test('should match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have two ListItems', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(
            wrapper.find('TodoListItem').at(0).prop('handleOnDelete')
        ).toEqual(expect.any(Function));
    });
});
