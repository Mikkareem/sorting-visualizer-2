import React from 'react';
import { mergeSortHelper } from './Algorithms/merge'
import { quickSortHelper } from './Algorithms/quick'
import { heapSortHelper } from './Algorithms/heap'
import { bubbleSortHelper } from './Algorithms/bubble';
import { selectionSortHelper } from './Algorithms/selection';
import { insertionSortHelper } from './Algorithms/insertion';

const NUMBER_OF_ARRAY_BARS = 200;

class SortingVisualiser extends React.Component {
    constructor(props) {
        super();

        this.state = {
            array: []
        }

    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = []
        for(let i=0; i<NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 500));        
        }

        this.setState({array});
    }

    mergeSort = () => {
        mergeSortHelper(this.state.array);
    }

    quickSort = () => {
        quickSortHelper(this.state.array);
    }

    heapSort = () => {
        heapSortHelper(this.state.array)
    }

    bubbleSort = () => {
        bubbleSortHelper(this.state.array);
    }

    selectionSort = () => {
        selectionSortHelper(this.state.array);
    }

    insertionSort = () => {
        insertionSortHelper(this.state.array);
    }

    render() {
        const {array} = this.state;

        return (
            <div className='flex-box'>
                <div className='array-container'>
                    {array.map((value, id) => (
                        <div className='array-bar'
                            key={id}
                            id={`${id}`} 
                            style={{
                                backgroundColor: 'turquoise',
                                height: `${value}px`
                            }}></div>
                    ))}
                </div>
                <div className='buttons'>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                </div>
            </div>
        )
    }
}

//Random number Generator between min and max value.
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualiser;