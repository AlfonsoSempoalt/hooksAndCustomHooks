import React from 'react';
import { shallow } from 'enzyme';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';

describe('tests to todoAdd', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test('should match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('shouldnt call handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() {} });
        expect(handleAddTodo).not.toHaveBeenCalled();
    });

    test('should have been call once handleAddTodo', () => {
        const value = 'leer ruso';
        wrapper.find('.form-control').simulate('change', {
            target: {
                value: value,
                name: 'description',
            },
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() {} });
        expect(handleAddTodo).toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
    });

    test('should have been call reset func', () => {
        const value = 'leer ruso';
        wrapper.find('.form-control').simulate('change', {
            target: {
                value: value,
                name: 'description',
            },
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() {} });
        expect( wrapper.find('input').prop('value')).toBe('');
    });
});
