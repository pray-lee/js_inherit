// 继承的本质就是复制，即重写原型对象，代之以一个新类型的实例
// parent
function Parent() {
    this.property = true
}
Parent.prototype.getSuperValue = function() {
    return this.property
}

// child
function Child() {
    this.childProperty = true
}

// 这里是关键，创建Parent的实例，并将实例赋值给Child.prototype
Child.prototype = new Parent()
Child.prototype.getSubValue = function() {
    return this.childProperty
}

let instance = new Child()
console.log(instance.getSuperValue())   //true

// 缺点
// 多个实例对引用类型的操作会被篡改

function SuperType() {
    this.color = ['red', 'yellow']
}

function SubType() {
}

SubType.prototype = new SuperType()

let instance1 = new SubType()
let instance2 = new SubType()
instance1.color.push('black')
console.log(instance2.color)   // [... 'black']