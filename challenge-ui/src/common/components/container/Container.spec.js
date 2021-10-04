import React from 'react';
import { render } from '@testing-library/react';
import { Container } from './Container';

const Component = function () {
  return (
    <Container>
      <div>page content</div>
    </Container>
  );
};

describe('Container', () => {
  it('renders Container component', () => {
    render(<Component />);
  });

  describe('contains custom content', () => {
    it('should contain child element text', () => {
      const { getByText } = render(<Component />);
      const el = getByText('page content');

      expect(el).toBeTruthy();
    });
  });
});
