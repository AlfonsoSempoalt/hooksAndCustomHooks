import React from 'react';
import { shallow } from 'enzyme';
import { demoTodos } from '../fixtures/demoTodos';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';

describe('tests to <TodoListItem />', () => {
    const handleToggle = jest.fn();
    const handleOnDelete = jest.fn();

    let wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            handleToggle={handleToggle}
            handleOnDelete={handleOnDelete}
            index={0}
        />
    );

    beforeEach(() => {
        wrapper = shallow(
            <TodoListItem
                todo={demoTodos[0]}
                handleToggle={handleToggle}
                handleOnDelete={handleOnDelete}
                index={0}
            />
        );
    });

    test('should match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call the function handleDelete', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(handleOnDelete).toHaveBeenCalled();
    });

    test('should call the function handleToggle', () => {
        wrapper.find('p').at(0).simulate('click');
        const IDTODO = 1;
        expect(handleToggle).toHaveBeenCalledWith(IDTODO);
    });

    test('should show the content of the todo', () => {
        const todo = demoTodos[0];
        todo.done = true;
        wrapper = shallow(
            <TodoListItem
                todo={todo}
                handleToggle={handleToggle}
                handleOnDelete={handleOnDelete}
                index={0}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
});
