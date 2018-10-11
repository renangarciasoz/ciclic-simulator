import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Simulation from './Simulation';

const mockStore = configureMockStore();
const store = mockStore({});

it('renders', () => {
  shallow(
    <Provider store={store}>
        <Simulation />
    </Provider>
  );
});