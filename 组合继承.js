// 组合原型链继承和借用构造函数继承就是组合继承
// 用原型链实现对原型属性和方法的继承
// 用构造函数来实现实例属性的继承
function SuperType(name) {
    this.name = name
    this.color = ['red', 'yellow']
}
SuperType.prototype.sayName = function() {
    console.log(this.name)
}

function SubType(name, age) {
    // 继承父类属性
    SuperType.call(this, name)
    this.age = age
}
// 继承方法 构建原型链
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function() {
    console.log(this.age)
}

let instance1 = new SubType('lee', 29)
instance1.color.push('black')
console.log(instance1.color) // [... 'black']
instance1.sayName() //lee
instance1.sayAge() //29

let instance2 = new SubType('zhang', 29)
console.log(instance2.color)
instance2.sayName() //zhang
instance2.sayAge()  // 29

// 缺点
// 第一次调用SuperType(), 给SubType.prototype写入两个属性name, color
// 第二次调用SuperType(), 给instance1写入两个属性name, color
// 实例对象instance1上的两个属性就屏蔽了其原型对象SubType.prototype的两个同名属性,所以组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法