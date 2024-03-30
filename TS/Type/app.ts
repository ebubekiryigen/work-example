let Name:string = 'Ebubekir Yigen'
const ACTIVE: boolean = true
const Age:number = 23
const names: string[] = ['kamil', 'ediz', 'ebubekir']
let user: {
    name:string,
    surname:string,
    age:number
}

user = {
    name:'Ebubekir',
    surname:'Yigen',
    age:23
}

let multiply: (x:number, y:number) => number

multiply = (x, y) => x*y

console.log(multiply(10,20))