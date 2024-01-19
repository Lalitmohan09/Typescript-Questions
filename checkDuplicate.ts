let duplicate = (arr:number[]):boolean=>{
    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                return true
            }
        }
    }
    return false
    
}

let randomArr:number[] = [3,4,6,2,7,8,3,5]
console.log(duplicate(randomArr))