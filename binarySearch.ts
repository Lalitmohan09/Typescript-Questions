let binarySearch = (arr: number[], target: number): number => {
    let leftIndex: number = 0
    let rightIndex: number = arr.length - 1
    
    while (leftIndex <= rightIndex) {
        let middleIndex: number = Math.floor((leftIndex + rightIndex) / 2)
        if (arr[middleIndex] === target) {
            return middleIndex
        }
        if (arr[middleIndex] < target) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }
    return -1
}
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 7
let result = binarySearch(newArr, target)
if (result === -1) {
    console.log("Target not found")
} else {
    console.log("Target found", target, " at index ", result )
}

