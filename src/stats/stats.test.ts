// 이번에는 테스트를 하나씩 만들면서 그에 대응하는 기능을 하나씩 만들어간다

import stats from './stats'

describe('stats', () => {
    it('gets maximum value', () => {
        expect(stats.max([1, 2, 3, 4])).toBe(4);
    })

    /**
     * 테스트만 만들고 실행시키면
     * TypeError: _stats.default.max is not a function
     * 오류가 발생한다
     */
})