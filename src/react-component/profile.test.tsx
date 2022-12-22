import Profile from './profile';
import {render} from '@testing-library/react'

describe('Profile', () => {
    it('match snapshot', () => {
        const util = render(<Profile username='me' name='test' />);
        expect(util.container).toMatchSnapshot();
    });
    it('check props', () => {
        const util = render(<Profile username='me' name='test' />);
        util.getByText('me');
        util.getByText('(test)');
        util.getByText(/te/);
    })
})