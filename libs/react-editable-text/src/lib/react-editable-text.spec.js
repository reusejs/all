import React from 'react';
import { render } from '@testing-library/react';
import ReactEditableText from './react-editable-text';
describe('ReactEditableText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactEditableText />);
    expect(baseElement).toBeTruthy();
  });
});
