class Item {
    constructor(value, weight) {
        this.value = value;
        this.weight = weight;
    }
}

function compareItems(a, b) {
    let r1 = a.value / a.weight;
    let r2 = b.value / b.weight;
    return r2 - r1;
}

function fractionalKnapsack(W, items) {

    items.sort(compareItems);

    let totalValue = 0;
    let currentWeight = 0;

    for (let i = 0; i < items.length; i++) {
        if (currentWeight + items[i].weight <= W) {

            currentWeight += items[i].weight;
            totalValue += items[i].value;
        } else {

            let remainingWeight = W - currentWeight;
            totalValue += (items[i].value / items[i].weight) * remainingWeight;
            break;
        }
    }

    return totalValue;
}

let W = 50;
let items = [
    new Item(60, 10),
    new Item(100, 20),
    new Item(120, 30)
];

let maxValue = fractionalKnapsack(W, items);
console.log("Maximum value :", maxValue);
