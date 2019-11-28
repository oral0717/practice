let oral = 'dwefee'

oral.substr(i,j) //返回位置开始，j长度的子字符串
oral.substring(i,j) //返回i位置开始，j位置结束的子字符串
oral.indexOf('e')  //返回参数字符在字符串中的索引位置，没有则返回-1

//获取单个字符
oral[index] //字符串当做数组处理，index为索引位置，超出范围返回undefined,IE6~8下无效，都返回undefined
oral.charAt(index)//兼容好，超出范围返回空字符串