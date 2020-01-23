class GenericNumber<T> {
    zeroValue!: T; //添加未定义类型
    add: ((x: T, y: T) => T) | undefined; //添加明确的赋值断言
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber)