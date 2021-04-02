import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../src/pages/Home';

describe('Testing Home Page', () => {
  test('Should render', () => {
    const tree = render(<Home />);

    expect(tree).toMatchSnapshot();
  });
});
