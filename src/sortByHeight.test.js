const solution = require('./sortByHeight.js');

test('test 1', () => {
    expect(solution([-1, 150, 190, 170, -1, -1, 160, 180])).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
});

test('test 2', () => {
    expect(solution([-1, -1, -1, -1, -1])).toEqual([-1, -1, -1, -1, -1]);
});

test('test 3', () => {
    expect(solution([-1])).toEqual([-1]);
});

test('test 4', () => {
    expect(solution([4, 2, 9, 11, 2, 16])).toEqual([2, 2, 4, 9, 11, 16]);
});

test('test 5', () => {
    expect(solution([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1])).toEqual([1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]);
});

test('test 6', () => {
    expect(solution([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])).toEqual([1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]);
});
