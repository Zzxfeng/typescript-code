"use strict";
/**
 * 泛型一般指组件根据当前的数据类型，推断出将来的数据类型，一般在函数中让参数和返回值类型保持一致可以这样做
 */
function identity(arg) {
    return arg;
}
var output = identity('diss'); //使用泛型函数
var output1 = identity('diss'); //有些编辑器可以自动推断，可以这样简写，vs好像不行
