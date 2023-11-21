export const heapSortHelper = async (array) => {
    await buildMaxHeap(array);
    for(let i=array.length - 1; i >= 0; i--) {
        await swap(array, i, 0);
        await maxHeapify(array, 0, i);
    }
}

const parent = i => Math.floor(i / 2);
const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

const buildMaxHeap = async arr => {
    let length = arr.length;
    let start = parent(length - 1);

    while(start >= 0) {
        await maxHeapify(arr, start, length);
        start -= 1;
    }
}

const maxHeapify = async (arr, index, size) => {
    let l = left(index);
    let r = right(index);
    let largest;
    if(l < size && arr[l] > arr[index]) 
        largest = l;
    else 
        largest = index;
    if(r < size && arr[r] > arr[largest])
        largest = r;
    if(largest !== index) {
        await swap(arr, largest, index);
        await maxHeapify(arr, largest, size);
    }
}

async function swap(arr, i, j) {
    let one = document.getElementById(`${i}`);
    let two = document.getElementById(`${j}`);
    one.style.backgroundColor = 'green';
    two.style.backgroundColor = 'green';
    
    await sleep(20);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    await sleep(20);

    let tempHeight = one.style.height;
    one.style.height = two.style.height;
    two.style.height = tempHeight;

    one.style.backgroundColor = 'turquoise';
    two.style.backgroundColor = 'turquoise';
}

const sleep = time => new Promise(resolve => setTimeout(resolve, time));