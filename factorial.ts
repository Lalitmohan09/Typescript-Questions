const num:number = 10;

let factorial=(num:number):number=>{
    let result: number=1;
    for(let i = num; i>=1; i--){
        result = result*i
    }

    return result
}
console.log(factorial(num))