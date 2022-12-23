import { render, screen} from '@testing-library/react';
import Showcase from '../Showcase';

// test case for showcase component

test('should render Showcase component', () => {
    render(<Showcase/>)
    const element = screen.getByTestId('Showcase-id')
    expect(element).toBeInTheDocument();
})