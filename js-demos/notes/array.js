var oralarray=new Array();
oralarray.constructor==Array;    //true

// 检测数组
value instanceof Array // 不适用与网页中有多个框架
Array.isArray(value) // IE9+,ff,safari,opera,chrome

// 转换方法
toString()
toLocaleString()
valueOf()
join() // 参数（分隔符）

// 栈方法
pop()     // 删除数组的最后一个元素，返回删除的项
push()   // 向数组的末尾添加一个或多个元素，并返回新的长度

// 队列方法
shift() // 方法用于把数组的第一个元素从其中删除，并返回第一个元素
unshift() // 数组的开头添加一个或多个元素，并返回新的长度

// 重排序方法
reverse() // 方法用于颠倒数组中元素的顺序。用于数值类型的
sort() // 方法用于对数组的元素进行排序。
function compare(value1, value2){
  if (value1 < value2) {
    return 1;
  } else if (value1 > value2) {
    return -1;
  } else {
    return 0;
  }
}
values = [0,1,5,10,15];
values.sort(compare);
alert(values); // 15,10,5,1,0

// 迭代方法,参数(function(item, index, array){}), IE9+,chrome,opera,safari,ff；原数组不变
every() //对数组的每一项运行给定函数,如果该函数对每一项都返回true,则返回true
filter() //对数组的每一项运行给定函数,返回该函数会返回true的项组成的数组
forEach() // 对数组的每一项运行给定函数,没有返回值
map() // 对数组的每一项运行给定函数,返回每次函数调用的结果组成的数组
some() //对数组的每一项运行给定函数，如果该函数对任一项返回true,则返回true
var numbers = [1,2,3,4,5];
numbers.forEach(function(item, index, array){});

// 归并方法,参数(function(prev, cur, index, array){}),  IE9+,chrome,opera,safari,ff；原数组不变
reduce() // 第一项开始向后迭代数组的所有项，然后构建一个最终返回的值
reduceRight() // 最后一项开始向前迭代数组的所有项，然后构建一个最终返回的值

// 位置方法,参数(要查找的项, [可选]表示查找起点位置的索引)；返回值都为位置，或-1[未找到时]
indexOf() // 从开头0向后查找
lastIndexOf()  // 从数组末尾开始向前查找

// 操作方法
concat() // 合并数组，原数组不变，返回合并后的数组
slice() // (起始元素位置，结束元素位置[若无则取至结尾])截取数组，返回截取出来的数组，原数组不变
splice() // (删除的第一项位置，删除的项数) 删除功能
        // (起始位置，0[要删除的项数]，要插入的项[可多个]) 插入功能
        // (起始位置，要删除的项数，要插入的任意数量的项) 替换功能
        // 始终返回被删除的项组成的数组，若没有则为[]；原数组改变

Array.from({length:3}, ()=>{});//第1个参数定义一个长度为3的数组
                               //第2个参数定义一个方法用来对每个元素处理，处理后的值放回数组

Array.from()//一个参数时，将类数组和部署了Iterator接口（字符串，Set和Map）转为数组
            //类似数组的对象：Dom操作返回的NodeList集合，arguments对象
//eg:所谓类似数组的对象，本质即必须有length属性，任何有length属性的对象，都可以通过Array.from()转为数组
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3//没有length就不是类数组的对象，不能用Array.from()将其转为数组
}
Array.from(arrayLike);//['a','b','c']

