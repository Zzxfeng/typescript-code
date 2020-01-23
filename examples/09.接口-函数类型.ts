export
interface SearchFn {
    (source:string,substring:string):boolean //表示函数参数限定为字符串类型，函数返回值为布尔类型
}
let search01: SearchFn
search01 = function(src:string,substring:string){//函数中参数名可以不和接口相同
    let result = src.search(substring)
    return result >1
}