export const bubbleSortHelper = async array => {
    for (let j=0; j<array.length; j++) {
        let swapped = false;
        let i = 0;
        while(i < array.length - 1) {
            //Comparing the adjacent elements
            if(array[i] > array[i+1]) {
                await swap(array, i, i+1);
                swapped = true;
            }
            i++;
        }
        if(swapped === false) {
            break;
        }
    }
}

async function swap(arr, i, j) {
    let one = document.getElementById(`${i}`);
    let two = document.getElementById(`${j}`);
    one.style.backgroundColor = 'green';
    two.style.backgroundColor = 'green';
    
    await sleep(2);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    await sleep(2);

    let tempHeight = one.style.height;
    one.style.height = two.style.height;
    two.style.height = tempHeight;

    one.style.backgroundColor = 'turquoise';
    two.style.backgroundColor = 'turquoise';
}

const sleep = time => new Promise(resolve => setTimeout(resolve, time));