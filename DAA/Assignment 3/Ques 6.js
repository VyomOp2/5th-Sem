function maximumUnits(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;
    let totalBoxes = 0;

    for (let i = 0; i < boxTypes.length; i++) {
        let [numBoxes, unitsPerBox] = boxTypes[i];

        if (totalBoxes + numBoxes <= truckSize) {
            totalUnits += numBoxes * unitsPerBox;
            totalBoxes += numBoxes;
        } else {

            let remainingSpace = truckSize - totalBoxes;
            totalUnits += remainingSpace * unitsPerBox;
            break;
        }
    }

    return totalUnits;
}

const boxTypes = [[1, 3], [2, 2], [3, 1]]; 
const truckSize = 4;
console.log(maximumUnits(boxTypes, truckSize));
