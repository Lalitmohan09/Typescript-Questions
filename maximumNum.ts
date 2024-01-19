let arr:number[] = [2,3,6,4,7,9,2]

let maximum = (arr:number[]):number=>{
    let max: number = arr[0]
    for(let i = 0; i<arr.length; i++){
        max = Math.max(max, arr[i])
    }
    return max
}

console.log(maximum(arr))