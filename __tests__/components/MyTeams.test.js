import React from 'react';
import { render } from '@testing-library/react';
import MyTeams from '../../src/components/MyTeams';

describe('Testing MyTeams component', () => {
  test('Should render', () => {
    const tree = render(<MyTeams />);

    expect(tree).toMatchSnapshot();
  });
});
