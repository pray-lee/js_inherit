// 使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类
function SuperType() {
    this.color = ['red', 'yellow']
}
function SubType() {
    // 继承自SuperType
    SuperType.call(this)
}

let instance1 = new SubType()
instance1.color.push('black')
let instance2 = new SubType()
console.log(instance2.color)    // ['red', 'yellow']

// 核心代码是SuperType.call(this), 创建子类实例时调用SuperType构造函数,于是SubType的每个实例都会将SuperType的属性复制一份

// 缺点
// 只能继承父类实例的属性和方法，不能继承原型的属性和方法
// 无法实现复用, 每个子类都有父类实例函数的副本，影响性能