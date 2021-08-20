import { mount } from 'enzyme';
import React from 'react';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('tests to <LoginScreen>', () => {
    const setUser = jest.fn();

    let wrapper = mount(
        <UserContext.Provider
            value={{
                setUser,
            }}
        >
            <LoginScreen />
        </UserContext.Provider>
    );

    beforeEach(() => {
        wrapper = mount(
            <UserContext.Provider
                value={{
                    setUser,
                }}
            >
                <LoginScreen />
            </UserContext.Provider>
        );
    });

    test('should match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should logIn properly', () => {
        const user = {
            id: 123,
            name: 'Alfonso Sempoalt',
        };
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith(user);
    });
});
