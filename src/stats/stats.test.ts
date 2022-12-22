// 이번에는 테스트를 하나씩 만들면서 그에 대응하는 기능을 하나씩 만들어간다

import stats from './stats'

describe('stats', () => {
    /**
     * 테스트만 만들고 실행시키면
     * TypeError: _stats.default.max is not a function
     * 오류가 발생한다
     */

    it('gets maximum value', () => {
        expect(stats.max([1, 2, 3, 4])).toBe(4);
    })

    it('gets minimum value', () => {
        expect(stats.min([1, 2, 3, 4])).toBe(1);
    })

    it('gets average value', () => {
        expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
    })

    describe('median', () => {
        it('sort array', () => {
            expect(stats.sort([4, 5, 3, 1, 2])).toEqual([1, 2, 3, 4, 5])
        })
        it('median odd length', () => {
            expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
        })
        it('median even length', () => {
            expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
        })
    })

    describe('mode', () => {
        it('one mode', () => {
            expect(stats.mode([1, 2, 2, 2, 3])).toBe(2);
        })
        it('no mode', () => {
            expect(stats.mode([1, 2, 3])).toBe(null);
        })
        it('multiple modes', () => {
            expect(stats.mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
        })
    })
})