// 일반적인 유닛 테스트 절차에 대한 예제

export function sum(a: number, b: number) {
    return a+b;
}

export function sumFail(a: number, b: number) {
    return a-b;
}

export function sumOf(numbers: number[]) {
    // let rst = 0
    // numbers.forEach(x => rst += x)
    // return rst

    // refactor
    return numbers.reduce((acc, cur) => cur + acc, 0)
}