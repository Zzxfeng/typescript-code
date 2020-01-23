/* function loggingIdentity<T>(arg: T): T {
    //我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以会报错，需要使用泛型约束
    console.log(arg.length);  
    return arg;
} */
export
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity({length: 10, value: 3}); //我们需要传入符合约束类型的值，必须包含必须的属性