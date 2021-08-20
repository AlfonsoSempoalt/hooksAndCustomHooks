import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Name of the group', () => {

    const user = {
        id: 123,
        name: 'Alfonso Sempoalt',
    };

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
