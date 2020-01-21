/**
 * 类型断言就是程序员对已知确定的类型进行类型指认，告诉编译器某个值的具体类型
 */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; //两种语法进行类型断言
// let strLength: number = (someValue as string).length;