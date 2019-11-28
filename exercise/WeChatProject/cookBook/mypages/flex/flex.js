// mypages/flex/flex.js
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
    console.log(this.data)
    let numberStr = Number(this.data.inputValue).toFixed(2)
    // let numberStrLen = numberStr.length
    // let dotPosition = numberStr.indexOf('.')
    // if (dotPosition >= 0){
    //   let initPart = numberStr.substring(0,dotPosition)
    //   let floatPart = numberStr.substr(dotPosition + 1,2)
    // }
    this.setData({
      inputValue: numberStr,
      textValue: this.formatMoney(numberStr)
    })
  }
  ,formatMoney(data){
    //1千2百3十4亿5千4百3十2万3千4百5十6 元整 6角8分
    let number = Number(data).toFixed(2) //1234.00
    number = String(number) //'1234.00'
    // let numLen = number.length //7
    let floatPart = this.formatFloatPart(number)
    let intPart = this.formatIntPart(number)
    return intPart + floatPart
  }
  ,formatFloatPart(data){
    const text = '整角分'
    let numLen = data.length //7
    if(!Number(data[numLen - 1]) && !Number(data[numLen - 2])){
      return text[0]
    } else {
      let jiao = !!Number(data[numLen-2]) ? `${data[numLen-2]}${text[1]}` : ''
      let fen = !!Number(data[numLen-1]) ? `${data[numLen-1]}${text[2]}` : ''
      return jiao + fen
    }

  }
  ,formatIntPart(data){
    const text = '零壹贰叁肆伍陆柒捌玖拾佰仟萬亿圆'

    let dataNum = Number(data) //1234
    let dataInt = String(Math.floor(dataNum)) //'1234'
    if (dataInt === '0') return ''
    let intLen = dataInt.length //4
    let index = intLen //
    let result = ''
    for (let item of dataInt){
      index--
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
      switch (index) {
        case 8:
          result += text[14] //亿
          break;
        case 4:
          result += text[13] //萬
          break;
        case 3:
        case 7:
        case 11:
          result += text[12] //仟
          break;
        case 2:
        case 6:
        case 10:
          result += text[11] //佰
          break;
        case 1:
        case 5:
        case 9:
          result += text[10] //拾
          break;

        default:
          break;
      }
    }
    return result + text[15]

  }
  

})