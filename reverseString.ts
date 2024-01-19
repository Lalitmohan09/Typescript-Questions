let str: string = "abraKaDabra"

let reverseStr = (str:string):string =>{
    let temp:string= "";
  
    for(let i = str.length-1; i>=0; i--){
        temp = temp+str[i]
    }
    return temp
}
console.log(reverseStr(str))