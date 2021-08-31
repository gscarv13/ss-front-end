// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const initialState = {
  userObject: { user: {}, loggedIn: false },
  schedulesStateObject: { schedules: [] },
  userSchedulesObject: { userSchedules: [] },
  activitiesStateObject: { loading: false, activities: [] },
};

const mockStore = configureStore([thunk]);
export const store = mockStore(initialState);

export const renderHelper = (component, mockStore = store) => render(
  <BrowserRouter>
    <Provider store={mockStore}>
      {component}
    </Provider>
  </BrowserRouter>,
);
