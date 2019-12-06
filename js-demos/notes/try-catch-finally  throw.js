function testFinally(){
	try {
		return 2;
	} catch (error){
		return 1;
	} finally {
		return 0;
	}
}
/*
1.有finally子句，无论try或catch语句块中包含什么代码，甚至return语句，都不会阻止finally子句执行，上面函数返回0；
2.IE7有bug ,除非catch子句，否则finally永不执行。IE8修复。故一律要提供catch子句，即使为空。
3.throw操作符，模拟浏览器错误，一旦遇到throw操作符，代码会立即停止执行。
throw new Error("error")
*/

// 4.错误类型：
Error
	// 基类型
EvalError
	// 使用eval()函数而发生异常时被抛出
RangeError
	// 数值超出相应范围时触发
ReferenceError
	// 在找不到对象的情况下。报object expected错，访问不存在的变量时触发
SyntaxError
	// 语法错误
TypeError
	// 变量中保存意外的类型时，访问不存在的方法时，变量的类型不符合要求时
URIError
	// 使用encodeURI()或decodeURI()时，URI格式不正确时，导致URIError错误