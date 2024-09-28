function merge(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const currentInterval = intervals[i];

        if (currentInterval[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], currentInterval[1]);
        } else {
            merged.push(currentInterval);
        }
    }
    return merged;
}

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals));
