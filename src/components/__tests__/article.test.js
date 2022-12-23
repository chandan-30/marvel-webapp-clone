import { render, screen} from '@testing-library/react';
import Article from '../Article';

// test case for article component

test('should render Article component', () => {
    render(<Article/>)
    const element = screen.getByTestId('Article-id')
    expect(element).toBeInTheDocument();
})