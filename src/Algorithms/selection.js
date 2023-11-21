export const selectionSortHelper = async array => {
    for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            if(array[j] < array[i]) {
                await swap(array, i, j);
            }
        }
    }
}

async function swap(arr, i, j) {
    let one = document.getElementById(`${i}`);
    let two = document.getElementById(`${j}`);
    one.style.backgroundColor = 'green';
    two.style.backgroundColor = 'green';
    
    await sleep(3);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    await sleep(3);

    let tempHeight = one.style.height;
    one.style.height = two.style.height;
    two.style.height = tempHeight;

    one.style.backgroundColor = 'turquoise';
    two.style.backgroundColor = 'turquoise';
}

const sleep = time => new Promise(resolve => setTimeout(resolve, time));