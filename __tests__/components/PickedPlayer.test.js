import React from 'react';
import { render } from '@testing-library/react';
import PickedPlayers from '../../src/components/PickedPlayers';

describe('Testing PickedPlayers component', () => {
  test('Should render', () => {
    const tree = render(<PickedPlayers />);

    expect(tree).toMatchSnapshot();
  });
});
