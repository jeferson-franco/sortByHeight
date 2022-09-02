function solution(a) {
    const sortedA = [...a].sort((a, b) => a - b).filter((num) => num !== -1);
    let sortedAIndex = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) continue;
        else {
            a[i] = sortedA[sortedAIndex++];
        }
    }
    return a;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test sortByHeight

// alternative solution
// function solution(a) {
//     let s = a.filter((h) => h > 0).sort((a, b) => a - b);
//     return a.map((p) => {
//         if (p !== -1) {
//             return s.shift();
//         }
//         return -1;
//     });
// }

// alternative solution
// function solution(a) {
//     let filtered = a.filter((val) => val !== -1);
//     let sorted = filtered.sort((a, b) => a - b);
//     return a.map((val) => (val === -1 ? -1 : sorted.shift()));
// }
