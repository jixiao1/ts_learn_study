var count1 = 123;
console.log(count1);
var scdf = 'jsoa';
console.log(scdf);
var Xiaojiejie = {
    uname: '谢大脚',
    age: 20
};

console.log(Xiaojiejie);
console.log(Xiaojiejie.uname);
console.log(Xiaojiejie.age);
var person1 = ['zs', 'lisi', 'wangwu'];
console.log(person1);
var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());
var p = new person();
console.log(p);
var xciao = function () {
    return '123';
};
console.log(xciao);


// 那我们现在总结一下对象类型可以有几种形式：

// 对象类型
// 数组类型
// 类类型
// 函数类型
// 这几种形式我们在TypeScript里叫做对象类型。
