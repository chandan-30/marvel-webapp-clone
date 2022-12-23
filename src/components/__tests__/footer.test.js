import { render, screen} from '@testing-library/react';
import Footer from '../Footer';

// test case for footer component

test('should render Footer component', () => {
    render(<Footer/>)
    const element = screen.getByTestId('Footer-id')
    expect(element).toBeInTheDocument();
})