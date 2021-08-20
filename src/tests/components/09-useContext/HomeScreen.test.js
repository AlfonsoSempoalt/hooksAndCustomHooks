import { mount } from 'enzyme';
import React from 'react';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('tests to <HomeScreen />', () => {
    const user = {
        name: 'Alfonso',
        email: 'alfonso@gmail.com',
    };
    const wrapper = mount(
        <UserContext.Provider
            value={{
                user,
            }}
        >
            <HomeScreen />
        </UserContext.Provider>
    );
    test('should match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
