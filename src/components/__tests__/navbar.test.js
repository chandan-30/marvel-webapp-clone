import { render, screen} from '@testing-library/react';
import Navbar from '../Navbar';

// test case for navbar component

test('should render Navbar component', () => {
    render(<Navbar/>)
    const element = screen.getByTestId('Navbar-id')
    expect(element).toBeInTheDocument();
})