const numArr :number[] = [1,2,3]
const stringArr : string[] = ['1','2', '3']

const undefinedArr : undefined[] = [undefined]

const arr :(string | number) [] = [1, '1', 2, '32']
console.log(arr)

// const xiaojiejie : {name: string, age: number}[] = [
//   {name: '刘晓丽', age: 20 },
//   { name: '流行话', age: 25}
// ]
// console.log(xiaojiejie)
// type laby = {name: string, age: number}
class laby1  {
  name: string;
  age: number
}
const xiaojiejie : laby1 [] = [
  {name: '刘晓丽', age: 20 },
  { name: '流行话', age: 25}
]
console.log(xiaojiejie)