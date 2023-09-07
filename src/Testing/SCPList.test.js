// SCPList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import SCPList from '../SCPList';

test('renders SCP list correctly', () => {
  const { getByText } = render(<SCPList />);
  
  // Write assertions to check if the expected UI elements are present
  expect(getByText('SCP-001: The Scarlet King')).toBeInTheDocument();
  // Add more assertions for other SCPs as needed
});
