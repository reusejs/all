import React from 'react';
import { render } from '@testing-library/react';
import ReactTextInput from './react-text-input';
describe('ReactTextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTextInput />);
    expect(baseElement).toBeTruthy();
  });
});
