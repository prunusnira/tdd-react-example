import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from './counter'

describe('counter', () => {
    it('match snapshot', () => {
        const utils = render(<Counter />)
        expect(utils.container).toMatchSnapshot()
    })
    it('check ui elem', () => {
        const utils = render(<Counter />)
        utils.getByText('0')
        utils.getByText('PLUS')
        utils.getByText('MINUS')
    })
    it('try increase', () => {
        const utils = render(<Counter />)
        const num = utils.getByText('0')
        const btn = utils.getByText('PLUS')

        fireEvent.click(btn)
        fireEvent.click(btn)
        expect(num).toHaveTextContent('2')
        expect(num.textContent).toBe('2')
    })
    
    it('try decrease', () => {
        const utils = render(<Counter />)
        const num = utils.getByText('0')
        const btn = utils.getByText('MINUS')

        fireEvent.click(btn)
        fireEvent.click(btn)
        expect(num).toHaveTextContent('-2')
        expect(num.textContent).toBe('-2')
    })
})