async function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    for(let i=start; i<end; i++) {
        if(arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    await swap(arr, pivotIndex, end);
    document.getElementById(`${pivotIndex}`).style.backgroundColor = 'red';
    return pivotIndex;
}

async function swap(arr, i, j) {
    let one = document.getElementById(`${i}`);
    let two = document.getElementById(`${j}`);
    one.style.backgroundColor = 'green';
    two.style.backgroundColor = 'green';
    
    await sleep(50);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    await sleep(50);

    let tempHeight = one.style.height;
    one.style.height = two.style.height;
    two.style.height = tempHeight;

    one.style.backgroundColor = 'turquoise';
    two.style.backgroundColor = 'turquoise';
}

async function quickSort(arr, start, end) {
    if (start >= end) return;

    let index = await partition(arr, start, end);
    await sleep(300)
    document.getElementById(`${index}`).style.backgroundColor = 'turquoise';
    await quickSort(arr, start, index - 1);
    await quickSort(arr, index + 1, end);
}

export function quickSortHelper(array) {
    quickSort(array, 0, array.length - 1);
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
