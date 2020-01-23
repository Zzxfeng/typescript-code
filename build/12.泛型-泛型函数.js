"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 泛型函数的几种定义方式
 */
function identity(arg) {
    return arg;
}
exports.identity = identity;
var myIdentity = identity; //完整写法
var myIdentity1 = identity; //对象写法
var myIdentity3 = identity; //接口写法
var myIdentity4 = identity; //泛型接口写法
