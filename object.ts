type User = {
    name:string;
    email: string;
    id: number
}

let student:User =  {
    name: "lalit",
    email: "lalit@mail.com",
    id: 121
}

let itrate = (obj:User):void=>{
    for (let value of Object.values(obj)) {
        console.log(value);
    }

}
itrate(student)