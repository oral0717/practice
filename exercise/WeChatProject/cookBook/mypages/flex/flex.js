Page({
  data: {
    inputValue: '',
    textValue: ''
  }
  ,inputNumber(data){
    if(data && data.detail){
      this.setData({
        inputValue: data.detail.value.trim()
      })
    }
  }
  ,transfer(data){
    let number = Number(this.data.inputValue) && Number(this.data.inputValue).toFixed(2)
    if (!number) {
      this.alert('','请输入正确金额')
    } else {
      this.setData({
        inputValue: number,
        textValue: this.formatMoney(number)
      })
    }

  }
  ,formatMoney(data){
    let numstr = String(data)
    let floatPart = this.formatFloatPart(numstr)
    let intPart = this.formatIntPart(numstr)
    return intPart + floatPart
  }
  ,formatFloatPart(data){
    const text = '整角分'
    let numLen = data.length
    if(!Number(data[numLen - 1]) && !Number(data[numLen - 2])){
      return text[0]
    } else {
      let jiao = !!Number(data[numLen-2]) ? `${this.formatNum(data[numLen-2])}${text[1]}` : ''
      let fen = !!Number(data[numLen-1]) ? `${this.formatNum(data[numLen-1])}${text[2]}` : ''
      return jiao + fen
    }

  }
  ,formatIntPart(data){
    const text = '零壹贰叁肆伍陆柒捌玖拾佰仟萬亿圆'
    let dataNum = Number(data)
    let dataInt = String(Math.floor(dataNum))

    if (dataInt === '0') return ''

    let intLen = dataInt.length
    let index = intLen
    let result = ''

    for (let item of dataInt){
      index--
      result += this.formatNum(item)
      result += this.formatInte(index)
    }

    return result + text[15]
  }
  ,formatNum(data){
    //数字转为大写
    const text = '零壹贰叁肆伍陆柒捌玖'
    let numStr = String(data)
    let result = ''
    for (let item of numStr){
      switch (item) {
        case '0':
          result += text[0]
          break;
        case '1':
          result += text[1]
          break;
        case '2':
          result += text[2]
          break;
        case '3':
          result += text[3]
          break;
        case '4':
          result += text[4]
          break;
        case '5':
          result += text[5]
          break;
        case '6':
          result += text[6]
          break;
        case '7':
          result += text[7]
          break;
        case '8':
          result += text[8]
          break;
        case '9':
          result += text[9]
          break;

        default:
          break;
      }

    }
    return result
  }
  ,formatInte(inte){
    // 处理整数位数量级单位
    const text = '拾佰仟萬亿'
    let index = Number(inte)
    let result = ''
    switch (index) {
      case 8:
        result += text[4] //亿
        break;
      case 4:
        result += text[3] //萬
        break;
      case 3:
      case 7:
      case 11:
        result += text[2] //仟
        break;
      case 2:
      case 6:
      case 10:
        result += text[1] //佰
        break;
      case 1:
      case 5:
      case 9:
        result += text[0] //拾
        break;

      default:
        break;
    }
    return result
  }
  ,alert(title='提示', content='有点小问题哦~'){
    wx.showModal({
      title,
      content
    })
  }
  ,onShareAppMessage(){
    return {
            title: '金额大写转换器',
            path: 'mypages/flex/flex'
          }
  }

})