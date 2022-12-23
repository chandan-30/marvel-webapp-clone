import { render, screen} from '@testing-library/react';
import Illustrations from '../Illustrations'

// test case for illustration component

test('should render Illustrations component', () => {
    render(<Illustrations/>)
    const element = screen.getByTestId('illu-id')
    expect(element).toBeInTheDocument();
})