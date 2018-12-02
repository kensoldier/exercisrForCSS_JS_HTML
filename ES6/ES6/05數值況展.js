// 1. 二进制与八进制
let b = 0o77;  // 八进制： 0O 0o 开头
let d = 0O34;  // 
let c = 0b11;  // 二进制：0b 0B 开头
let f = 0B1011;
console.log('b :', b);
console.log('c :', c);
console.log('d :', d);
console.log('f :', f);


// 将二进制或八进制数据转成十进制

console.log('Number(0b1011) :', Number(0b1011));
console.log('Number(0O1011) :', Number(0O1011));

// 2.  Number.isFinite(), Number.isNaN()  数字判断增强，全局方法添加到 Number的静态方法。

console.log(isFinite(1.2)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN));  // false
console.log(isFinite("1")); // 非数 字，那么会先进行 隐式的转化成数字类型再进行判断。 => true
console.log(isFinite(true)); // true

console.log(isNaN(NaN));  // true 
console.log(isNaN(Infinity)); // false
console.log(isNaN(22)); // false
console.log('isNaN("aa") :', isNaN("aa")); // aa先轉成數字類型 在判斷 因為是數值方法 true

//轉換到Number 的方法 不會進行類型轉換
console.log('Number.isFinite(Infinity) :', Number.isFinite(Infinity));
console.log('Number.isFinite(1) :', Number.isFinite(1));
console.log('Number.isFinite(NaN) :', Number.isFinite(NaN));
console.log('Number.isFinite("1") :', Number.isFinite("1"));//false 

console.log('Number.isNaN(NaN) :', Number.isNaN(NaN));
console.log('Number.isNaN(1) :', Number.isNaN(1));
console.log('Number.isNaN("NaN") :', Number.isNaN("NaN"));  //false

// 3. Number.parseInt(), Number.parseFloat()  全局方法 迁移到 Number的静态方法上

console.log(Number.parseFloat("2.33"));
console.log(Number.parseInt('23aaa'));

// 4. 判断是否是一个整数 Number.isInteger()
//很多方法移到NUMBER上面是為了把全局的方法 慢慢做一個過度 規劃成面相對向的語言
console.log('Number.isInteger("1") :', Number.isInteger("1")); //false
console.log('Number.isInteger(1) :', Number.isInteger(1));
console.log('Number.isInteger(1.2) :', Number.isInteger(1.2));//false
console.log('Number.isInteger(1.0) :', Number.isInteger(1.0));//true
console.log('Number.isInteger(Infinity) :', Number.isInteger(Infinity));
console.log('Number.isInteger(NaN) :', Number.isInteger(NaN));


// 5. Number.EPSILON, ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。

console.log('Number.EPSILON :', Number.EPSILON);  // Number.EPSILON : 2.220446049250313e-16

console.log('0.1+0.2 -0.3 < Number.EPSILON :', 0.1+0.2 -0.3 < Number.EPSILON);  //相減完會變成非常小的數值 其實不等於 他其實就是一個極小的長亮


// 6. 安全整数和 Number.isSafeInteger()  返回true or false
// JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。

console.log('Number.isSafeInteger(33333) :', Number.isSafeInteger(33333));


// 7. Math对象扩展

// 7.1 指数运算符**

console.log('Math.pow(2, 3) :', Math.pow(2, 3));

console.log('2**3 :', 2**3);
console.log('3**3 :', 3**3);


// 7.2 Math.trunc方法用于去除一个数的小数部分，返回整数部分

// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
console.log('Math.trunc(2.3) :', Math.trunc(2.3));
console.log('Math.trunc("3.333") :', Math.trunc("3.333"));

// 对于空值和无法截取整数的值，返回NaN。
console.log('Math.trunc(NaN) :', Math.trunc(NaN));
console.log('Math.trunc("aa") :', Math.trunc("aa"));


// 7.3 判断数字的符号 Math.sign()

// Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
// 它会返回五种值。
  // 参数为正数，返回+1；
  // 参数为负数，返回-1；
  // 参数为 0，返回0；
  // 参数为-0，返回-0;
  // 其他值，返回NaN。

console.log('Math.sign(2) :', Math.sign(2));
console.log('Math.sign(-2) :', Math.sign(-2));
console.log('Math.sign(-0) :', Math.sign(-0));
console.log('Math.sign("aa") :', Math.sign("aa"));


// 7.4 Math.cbrt方法用于计算一个数的立方根

 // 对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值。

 console.log('Math.cbrt(8) :', Math.cbrt(8));
 

// 7.5 Math.hypot方法返回所有参数的平方和的平方根。  根下 a^2 + b^2  , 高斯定理

console.log('Math.hypot(3, 4) :', Math.hypot(3, 4));


// 7.6 Math.expm1(),  Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。


// 7.7 Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。


// 7.8 Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。


// 其他的增加的请参考在线资料


