/**
 * 修饰符：
 *  1.默认为 public，代表共有方法/属性
 *  2.成员被标记成 private时，它就不能在声明它的类的外部访问
 *  3.protected修饰符与 private修饰符的行为很相似,但是子类可以访问父类中protected修饰符标记的属性和方法
 *  4.readonly关键字将属性设置为只读的
 * 继承：extends
 * 关键字：super
 *  1.可以当做函数使用，代表了父类的构造函数，并且返回子类的实例
 *  2.可以当做对象使用，父类在普通方法中，指向父类的原型对象；在静态方法中，指向父类
 *  3.注意：super在作为对象时，会将this指向当前子类
 */
class Person {
    name: string;
    age: number;
    constructor(){
        this.name = '',//注意：一定要初始化属性值，否则会报错
        this.age = 0
    };
    protected play(){
        console.log('我是私有方法，外部不能访问！'+this.name)
    }
}

let Alex = new Person()
Alex.name = 'zhang'
Alex.age = 18
console.log(Alex)

class Student extends Person {
    scholl: string
    constructor(){
        super()
        this.scholl = '河阳小学'
        super.play()
    }
}
let student = new Student()
student.name = 'Bob'
console.log(student)