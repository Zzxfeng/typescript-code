/**
 * 有时候接口中的属性数量有不确定的情况时使用，主要是借助接口中的可索引类型特性
 */
export
interface dataType {
    name?:string
    age?:number
    [propName:string]:any //额外属性
}
function getUserInfo(userInfo:dataType){
    console.log(userInfo.alias)
}
let info = {
    name:'feng',
    alias:'Alex',
    age:18
}
getUserInfo(info)