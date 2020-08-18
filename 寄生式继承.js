// 在原型式继承的基础上，增强对象，返回构造函数
function object(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}

// 这里是给上面object()返回的对象添加一些新的属性和方法，达到增强效果 
function createAnother(original){
    let clone = object(original) // 创建一个新对象
    // 增强 添加一个方法
    clone.sayHi = function() {
        console.log('hi')
    }
    return clone
}

// eg
let person = {
    name: 'lee',
    friends: ['shelby', 'court', 'Van']
}
let anotherPerson = createAnother(person)
anotherPerson.sayHi() // hi

// 缺点
// 跟原型式继承一样