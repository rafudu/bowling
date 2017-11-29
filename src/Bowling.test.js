import React from 'react';
import ReactDOM from 'react-dom';
import Bowling from './Bowling';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bowling />, div);
});
