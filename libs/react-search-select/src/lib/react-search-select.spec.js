import React from 'react';
import { render } from '@testing-library/react';
import ReactSearchSelect from './react-search-select';
describe('ReactSearchSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSearchSelect />);
    expect(baseElement).toBeTruthy();
  });
});
