let anyValue: any = true//任意类型
let list: any[] = [1, true, "free"] //任意类型数组
function anyFn(): any{
    console.log('函数的返回值类型可以为任意类型')
}
function noValue(): void{ //没有任何类型
    console.log('函数没有返回值，或者说返回值为null或undefined')
}
let u: undefined = undefined; //undefined类型
let n: null = null; //null类型
/**
 * never类型表示的是那些永不存在的值的类型
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
let obj: object = {name:'bob'} //除number，string，boolean，symbol，null或undefined之外的类型
let obj1: object = [12,8,'h'] //除number，string，boolean，symbol，null或undefined之外的类型
let obj2: object = function(){//除number，string，boolean，symbol，null或undefined之外的类型
    console.log('函数也是对象类型哦...')
} 