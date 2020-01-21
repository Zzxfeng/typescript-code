"use strict";
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {})); //枚举类型（使用枚举类型可以为一组数值赋予友好的名字）
var redColor = color.Red;
console.log(redColor);
var color1;
(function (color1) {
    color1[color1["Red"] = 2] = "Red";
    color1[color1["Green"] = 3] = "Green";
    color1[color1["Blue"] = 4] = "Blue";
})(color1 || (color1 = {})); //枚举类型（默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值）
var colorName = color1[3]; //获取枚举类型指定下标的颜色
console.log(colorName);
