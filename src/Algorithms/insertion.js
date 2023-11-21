export const insertionSortHelper = async array => {
    for(let i = 0; i < array.length; i++) {
        let j = i + 1
        while(j > 0) {
            //not in order
            if (array[j - 1] > array[j]) {
                await swap(array, j-1, j);
            } else {
                //in order
                break;
            }
            j -= 1
        }
    }
}

async function swap(arr, i, j) {
    let one = document.getElementById(`${i}`);
    let two = document.getElementById(`${j}`);
    one.style.backgroundColor = 'green';
    two.style.backgroundColor = 'red';
    
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