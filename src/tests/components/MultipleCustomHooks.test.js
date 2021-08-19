import React from 'react';
import '@testing-library/jest-dom';
import { expect, describe } from '@jest/globals';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../components/03-useFetch/MultipleCustomHooks';
import { useFetch } from '../../hooks/useFetch';
jest.mock('../../hooks/useFetch');

describe('tests to MultipleCustomHooks.jsx', () => {
    test('should match with the snapshot', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should charge the information', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Alfonso',
                    quote: 'Hello world',
                },
            ],
            loading: false,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-2').text().trim()).toBe('Hello world');
        expect(wrapper.find('.blockquote-footer').text().trim()).toBe(
            'Alfonso'
        );
    });
});
