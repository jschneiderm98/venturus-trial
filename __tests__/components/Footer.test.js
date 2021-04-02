import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../src/components/Footer';

describe('Testing Footer component', () => {
  test('must match snapshot', () => {
    const tree = render(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
