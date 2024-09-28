class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    insert(key, vertex) {
        this.heap.push({ key, vertex });
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].key > this.heap[index].key) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftChildIndex < length) {
                if (this.heap[leftChildIndex].key < this.heap[index].key) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                if (
                    (swapIndex === null && this.heap[rightChildIndex].key < this.heap[index].key) ||
                    (swapIndex !== null && this.heap[rightChildIndex].key < this.heap[leftChildIndex].key)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;
            this.swap(index, swapIndex);
            index = swapIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function primMST(graph) {
    const n = graph.length;
    const key = new Array(n).fill(Infinity); 
    const parent = new Array(n).fill(-1); 
    const inMST = new Array(n).fill(false);

    const heap = new MinHeap();

    key[0] = 0;
    heap.insert(0, 0);

    while (!heap.isEmpty()) {
        const { vertex } = heap.extractMin();
        inMST[vertex] = true; 

        for (let [adjVertex, weight] of graph[vertex]) {
            if (!inMST[adjVertex] && weight < key[adjVertex]) {
                key[adjVertex] = weight;
                parent[adjVertex] = vertex; 
                heap.insert(key[adjVertex], adjVertex); 
            }
        }
    }

    console.log("Edge \tWeight");
    for (let i = 1; i < n; i++) {
        console.log(parent[i], "-", i, "\t", key[i]);
    }
}

const graph = [

    [[1, 2], [3, 6]],
    [[0, 2], [2, 3], [3, 8], [4, 5]], 
    [[1, 3], [4, 7]], 
    [[0, 6], [1, 8], [4, 9]], 
    [[1, 5], [2, 7], [3, 9]]
];

primMST(graph);
