// 结合借用构造函数传递参数和寄生模式实现继承

function inheritPrototype(subType, superType) {
    let prototype = Object.create(superType.prototype) //创建对象，创建父类原型的副本
    prototype.constructor = subType //修改constructor指向
    subType.prototype = prototype // 指定对象，将新创建的对象赋值给子类的原型
}

// 父类初始化实例属性和原型属性
function SuperType(name) {
    this.name = name
    this.color = ['red', 'yellow']
}
SuperType.prototype.sayName = function() {
    console.log(this.name)
}

// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}

// 将父类原型指向子类
inheritPrototype(SubType, SuperType)

// 新增子类原型属性
SubType.prototype.sayAge = function() {
    console.log(this.age)
}

