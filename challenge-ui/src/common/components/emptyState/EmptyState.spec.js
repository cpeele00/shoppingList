import React from 'react';
import { render } from '@testing-library/react';
import { EmptyState } from './EmptyState';

const Component = function () {
  return (
    <EmptyState>
      <p>Just some text</p>
      <button>My button</button>
    </EmptyState>
  );
};

describe('EmptyState', () => {
  it('renders EmptyState component', () => {
    render(<Component />);
  });

  describe('contain custom content', () => {
    it('should contain button element', () => {
      const { getByRole } = render(<Component />);
      const button = getByRole('button');

      expect(button).toBeTruthy();
    });
  });
});
