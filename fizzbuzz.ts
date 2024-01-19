let num1 = 100;
// let arr1: (number | string)[] = [];

let fizzbuzz = (num: number):void =>
// :(number | string)[]
{
    for (let i = 1; i <= num; i++) {

        if (i % 5 == 0 && i % 3 == 0) {
            console.log("FuzzBuzz")
            // arr1.push("FuzzBuzz")
            continue;

        } else if (i % 3 == 0) {
            // arr1.push("Fuzz")
            console.log("Fuzz")
            continue;

        } else if (i % 5 == 0) {
            // arr1.push("Buzz")
            console.log("Buzz")
            continue;

        } else {
            // arr1.push(i)
            console.log(i)
        }
    }

    // return arr1
}
fizzbuzz(num1)
// console.log(fizzbuzz(num1))
