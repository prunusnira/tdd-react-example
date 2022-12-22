// 이번에는 테스트를 하나씩 만들면서 그에 대응하는 기능을 하나씩 만들어간다

const stats = {
    max: (numbers: number[]) => {
        // 일단 만들고
        // let result = numbers[0];
        // numbers.forEach(x => {
        //     if(x > result) result = x;
        // })
        // return result;

        // 리팩토링
        return Math.max(...numbers)
    },
    min: (numbers: number[]) => {
        // 동일과정 생략
        return Math.min(...numbers)
    },
    avg: (numbers: number[]) => {
        // 쉬운 구현
        // const sum = numbers.reduce((acc, cur) => acc + cur, 0)
        // return sum / numbers.length;

        // reduce 확장
        // return numbers.reduce((acc, cur, idx, arr) => {
        //     return idx === arr.length - 1 ?
        //     (acc + cur) / arr.length
        //     : acc + cur
        // }, 0)

        // 더 짧게
        // return numbers.reduce((acc, cur, idx, arr) => {
        //     return acc + cur / arr.length // 그냥 더할때 미리 평균값으로 더함
        // }, 0)

        // 또 짧게
        return numbers.reduce((acc, cur, idx, {length}) => {
            return acc + cur / length // 분해해서 arr의 length를 직접 참조
        }, 0)
    },
    sort: (numbers: number[]) => {
        return numbers.sort((a, b) => a - b)
    },
    median: (numbers: number[]) => {
        // 초기 구현
        // const middle = Math.floor(numbers.length / 2);
        // return numbers.length % 2 === 0 ?
        // (numbers[middle - 1] + numbers[middle])/2
        // :
        // numbers[middle]

        // 리팩토링
        const {length} = numbers;
        const middle = Math.floor(numbers.length / 2);
        return length % 2 ?
            numbers[middle] : (numbers[middle - 1] + numbers[middle]) / 2;
    },
    mode: (numbers: number[]) => {
        // 초기 구현
        const count = new Map<number, number>();
        numbers.forEach(x => {
            count.get(x) || 0 ? count.set(x, count.get(x)! + 1) : count.set(x, 1);
        })
        
        const maxCnt = Math.max(...count.values());
        
        if(maxCnt < 2) return null;
        const data = [...count.keys()].filter(n => count.get(n) === maxCnt)
        if(data.length === 1) {
            return data[0]
        }
        return data
    }
}

export default stats;