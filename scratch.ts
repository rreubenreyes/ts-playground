console.log('hello world')

const bool: boolean = true
const num: number = 2
const str: string = 'hello'
const list: Array<any> = [bool, num, str]
const typedList: Array<number> = [1, 2, 3]
const tuple: [number, string] = [num, str]

console.log(bool, num, str)
console.log(list)
console.log(typedList)
console.log(tuple)

const oops: never = 3
