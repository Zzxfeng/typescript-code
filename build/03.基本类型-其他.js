"use strict";
var anyValue = true; //任意类型
var list = [1, true, "free"]; //任意类型数组
function anyFn() {
    console.log('函数的返回值类型可以为任意类型');
}
function noValue() {
    console.log('函数没有返回值，或者说返回值为null或undefined');
}
var u = undefined; //undefined类型
var n = null; //null类型
/**
 * never类型表示的是那些永不存在的值的类型
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
var obj = { name: 'bob' }; //除number，string，boolean，symbol，null或undefined之外的类型
var obj1 = [12, 8, 'h']; //除number，string，boolean，symbol，null或undefined之外的类型
var obj2 = function () {
    console.log('函数也是对象类型哦...');
};
