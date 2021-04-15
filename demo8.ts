
interface Gril {
  name: string;
  age: number;
  bust: number

}
const gril = {
  name: '谢大脚',
  age: 20,
  bust: 98
}

const screenRename  = (gril: Gril) => {
  gril.age  < 24 && gril.bust >= 90 && console.log(gril.name + '你被录取了')
  gril.age >=24 || gril.bust < 90 && console.log(gril.name+ '你被淘汰了')
}

const getRename = (gril: Gril) => {
  console.log(gril.name+'年龄是:'+gril.age)
  console.log(gril.name+"胸围是:"+gril.bust)
}

screenRename(gril)
getRename(gril)