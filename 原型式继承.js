// 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型

function object(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}

// eg
let person = {
    name: 'lee',
    friends: ['zhang', 'wang']
}

let anotherPerson = object(person)
anotherPerson.name = 'another'
anotherPerson.friends.push('gou')

let yetAnotherPerson = object(person)
yetAnotherPerson.name = 'Linda'
yetAnotherPerson.friends.push('barbie')

console.log(person.friends)   // [... 'gou', 'barbie']

// 缺点
// 原型链继承多个实例的引用类型属性指向相同，会被篡改
// 无法传递参数
