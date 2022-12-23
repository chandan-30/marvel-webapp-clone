import { render, screen} from '@testing-library/react';
import Apisection from '../Apisection';

// test case for apisection component

test('should render apisection component', () => {
    render(<Apisection/>)
    const element = screen.getByTestId('api-id')
    expect(element).toBeInTheDocument();
})