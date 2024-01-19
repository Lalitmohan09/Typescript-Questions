let example: string = "akaaka"

let reverse=(str:string):boolean=>{
    let temp:string= str;
    let temp1:string= "";
  
    for(let i = str.length-1; i>=0; i--){
        temp1 = temp1+str[i]
    }
    if(temp==temp1){
        return true
    }
    else return false
}
console.log(reverse(example))