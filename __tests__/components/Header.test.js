import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../src/components/Header';

describe('Testing Header component', () => {
  test('Should render', () => {
    const tree = render(<Header />);

    expect(tree).toMatchSnapshot();
  });
});
