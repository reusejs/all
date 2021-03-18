import React from 'react';
import { render } from '@testing-library/react';
import ReactTextareaAutogrow from './react-textarea-autogrow';
describe('ReactTextareaAutogrow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTextareaAutogrow />);
    expect(baseElement).toBeTruthy();
  });
});
