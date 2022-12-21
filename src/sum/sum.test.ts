import {sum, sumFail, sumOf} from './sum'

describe('sum test', () => {
    it('1 + 2 = 3', () => {
        expect(sum(1,2)).toBe(3)
    })
    it('1 + 2 = 3 (FAIL)', () => {
        expect(sumFail(1,2)).toBe(3)
    })
    it('add 1~5 = 15', () => {
        expect(sumOf([1, 2, 3, 4, 5])).toBe(15)
    })
})

