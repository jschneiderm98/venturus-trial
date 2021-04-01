import React from 'react';
import { render } from '@testing-library/react';
import Top5 from '../../src/components/Top5';

describe('Testing Top5 component', () => {
  test('Should render', () => {
    const tree = render(<Top5 />);

    expect(tree).toMatchSnapshot();
  });
});
