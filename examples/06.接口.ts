/**
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查
 * 可选属性/参数 ：用? ，属性/参数不全都是必需的
 */
export
interface dataType {
    name:string
    alias:string
    age?:number //可选属性
}
function getUserInfo(userInfo:dataType){
    console.log(userInfo.name)
}
let info = {
    name:'feng',
    alias:'Alex',
    age:18
}
getUserInfo(info)

//可选参数
function optional(projiect1:string,projiect2?:string){//projiect2是可选参数，调用函数时可不传参
    console.log(projiect1,projiect2)
}
optional('数学','历史')