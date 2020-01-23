"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 10, value: 3 }); //我们需要传入符合约束类型的值，必须包含必须的属性
