const getMergeSortAnimations = (array) => {
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

const mergeSort = (mainArray, start, end, auxiliary, animations) => {
    if(start === end) return;
    const middle = Math.floor((start + end) / 2);
    mergeSort(auxiliary, start, middle, mainArray, animations);
    mergeSort(auxiliary, middle + 1, end, mainArray, animations);
    doMerge(mainArray, start, middle, end, auxiliary, animations);
}

const doMerge = (main, start, middle, end, auxiliary, animations) => {
    let k = start;
    let i = start;
    let j = middle + 1

    while(i <= middle && j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);
        if(auxiliary[i] <= auxiliary[j]) {
            animations.push([k, auxiliary[i]]);
            main[k++] = auxiliary[i++];
        } else {
            animations.push([k, auxiliary[j]]);
            main[k++] = auxiliary[j++];
        }
    }
    while(i <= middle) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliary[i]]);
        main[k++] = auxiliary[i++];
    }
    while(j <= end) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliary[j]]);
        main[k++] = auxiliary[j++];
    }
}

export const mergeSortHelper = array => {
    const animations = getMergeSortAnimations(array);
    for(let i=0; i<animations.length; i++) {
        const arraybars = document.getElementsByClassName('array-bar');
        const isColorChange = i%3 !== 2;
        if(isColorChange) {
            const [baroneIDx, bartwoIDx] = animations[i];
            const barOneStyle = arraybars[baroneIDx].style;
            const barTwoStyle = arraybars[bartwoIDx].style;
            const color = i%3 === 0 ? 'red' : 'turquoise';
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backGroundColor = color;
            }, i * 3);
        } else {
            setTimeout(() => {
                const [baroneIDx, newHeight] = animations[i];
                const barOneStyle = arraybars[baroneIDx].style;
                barOneStyle.height = `${newHeight}px`; 
            }, i * 3);
        }
    }
}