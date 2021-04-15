const count1: number = 123
console.log(count1)
const scdf:string = 'jsoa'
console.log(scdf)
// 我这里就举几个最常用的哦,
// null,undefinde,symbol,boolean，void
const Xiaojiejie: {
  uname: string,
  age: number
} = {
  uname: '谢大脚',
  age: 20
}
console.log(Xiaojiejie)
console.log(Xiaojiejie.uname)
console.log(Xiaojiejie.age)

const person1: string[] = ['zs', 'lisi', 'wangwu']

console.log(person1)

class person {}
const p:person = new person()

console.log(p)

const xciao: () => string = () => {
  return '123'
}

console.log(xciao)



// 那我们现在总结一下对象类型可以有几种形式：

// 对象类型
// 数组类型
// 类类型
// 函数类型
// 这几种形式我们在TypeScript里叫做对象类型。
