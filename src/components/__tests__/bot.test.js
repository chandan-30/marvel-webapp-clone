import { render, screen} from '@testing-library/react';
import Bot from '../Bot';

// test case for Bot component

test('should render Bot component', () => {
    render(<Bot/>)
    const element = screen.getByTestId('Bot-id')
    expect(element).toBeInTheDocument();
})