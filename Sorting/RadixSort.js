// Good for small numbers. 

function radixSort(arr) {
    // Find the maximum number to determine the number of digits
    let max = Math.max(...arr);
    
    // Perform counting sort for every digit
    for (let exp = 1; max / exp > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr;
}

function countingSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    // Store count of occurrences in count[]
    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    // Change count[i] so that count[i] contains the actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    // Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// Example usage
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original array:", arr);
arr = radixSort(arr);
console.log("Sorted array:", arr);
