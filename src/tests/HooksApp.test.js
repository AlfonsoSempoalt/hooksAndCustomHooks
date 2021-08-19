import { expect, describe } from '@jest/globals';
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import HooksApp from '../HooksApp';

describe('Testing to <HooksApp />', () => {
  
  
  test('should match with the snapshot', () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
