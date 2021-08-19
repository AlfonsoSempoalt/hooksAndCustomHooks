import React from 'react';
import '@testing-library/jest-dom';
import { expect, describe } from '@jest/globals';
import { shallow } from 'enzyme';
import { RealExampleUseRef } from '../../../components/04-useRef/RealExampleUseRef';

describe('tests in <RealExampleUseRef />', () => {
    let wrapper = shallow(<RealExampleUseRef />);

    beforeEach(() => {
        wrapper = shallow(<RealExampleUseRef />);
    });

    test('should match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('should show the component  <MultipleCustomHooks />', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});
