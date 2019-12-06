let oral = {}
oral.propertyIsEnumerable(xxx)
// 判断对象中是否有xxx属性，并且能通过for in枚举，如Array对象的length是不可枚举的

// 判断是否是数组
function isArray(arr){
  return Object.prototype.toString.call(arr) === '[Object Array]';
}

Object.keys(obj)// 遍历对象keys,返回key name组成的数组
