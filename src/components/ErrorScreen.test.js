import React from 'react';
import ReactDOM from 'react-dom';
import ErrorScreen from './ErrorScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});