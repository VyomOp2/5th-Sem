function findMaxMin(arr, low, high) {

    if (low === high) {
        return { max: arr[low], min: arr[low] };
    }

    if (high === low + 1) {
        if (arr[low] > arr[high]) {
            return { max: arr[low], min: arr[high] };
        } else {
            return { max: arr[high], min: arr[low] };
        }
    }

    const mid = Math.floor((low + high) / 2);

    const left = findMaxMin(arr, low, mid);
    const right = findMaxMin(arr, mid + 1, high);

    return {
        max: Math.max(left.max, right.max),
        min: Math.min(left.min, right.min)
    };
}

const arr = [3, 5, 1, 8, 7, 2, 6];
const result = findMaxMin(arr, 0, arr.length - 1);
console.log("Max:", result.max);
console.log("Min:", result.min);
