enum color {
    Red,
    Green,
    Blue
  } //枚举类型（使用枚举类型可以为一组数值赋予友好的名字）
  let redColor: color = color.Red;
  console.log(redColor)
  enum color1 {
    Red = 2,
    Green,
    Blue
  } //枚举类型（默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值）
  let colorName: string = color1[3]; //获取枚举类型指定下标的颜色
  console.log(colorName);