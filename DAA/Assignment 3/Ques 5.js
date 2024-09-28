function findContentChildren(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let childIndex = 0;
    let cookieIndex = 0;

    while (childIndex < g.length && cookieIndex < s.length) {
        if (s[cookieIndex] >= g[childIndex]) {
            childIndex++;
        }
        cookieIndex++;
    }

    return childIndex;
}

const g = [1, 2, 3];
const s = [1, 1];
console.log(findContentChildren(g, s)); 
