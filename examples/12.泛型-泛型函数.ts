/**
 * 泛型函数的几种定义方式
 */
export
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: <T>(arg: T) => T = identity //完整写法
let myIdentity1: {<T>(arg: T): T} = identity //对象写法
interface GenericIdentityFn {
    <T>(arg: T): T;
}
let myIdentity3: GenericIdentityFn = identity //接口写法
interface GenericIdentityFn1<T> { //泛型接口
    (arg: T): T;
}
let myIdentity4: GenericIdentityFn1<number> = identity //泛型接口写法