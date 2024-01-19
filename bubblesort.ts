let bubbleSort = (arr:number[]):number[]=>{
    let temp:number;
    for(let i = 0; i<arr.length - 1; i++){
        for(let j = 0; j<arr.length - i - 1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
                // temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
            }
        }
    }
    return arr
}

// let unSortedArr:number[] =

console.log(bubbleSort([5,3,7,9,2,11,18]))