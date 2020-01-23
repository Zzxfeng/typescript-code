"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUserInfo(userInfo) {
    console.log(userInfo.name);
}
var info = {
    name: 'feng',
    alias: 'Alex',
    age: 18
};
getUserInfo(info);
//可选参数
function optional(projiect1, projiect2) {
    console.log(projiect1, projiect2);
}
optional('数学', '历史');
