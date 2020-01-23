/**
 * TypeScript支持两种索引签名：字符串和数字。
 */
export
interface StringArray {
    [index: number]: string; //表示索引为number类型，值为字符串类型
  }
  
  let myArray: StringArray;
  myArray = ["Bob", "Fred"];

  let myStr: string = myArray[0];