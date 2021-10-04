import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

const Component = function () {
  return <Header title='Some title' />;
};

describe('Header', () => {
  it('renders Header component', () => {
    render(<Component />);
  });

  describe('contains custom title', () => {
    it('should contain custom title', () => {
      const { getByText } = render(<Component />);
      const el = getByText('Some title');

      expect(el).toBeTruthy();
    });
  });
});
