var fileUp = document.getElementById('upPicture')   //接下来是一个性能问题，如何解决？？
var inputText = document.getElementById('myText')
// var  _src= ''   //图片路径临时存放
// var imgArr = []
// status_has_time = false
var edit_time = null;
function markDown(_src, imgArr){ //在获得焦点的情况下就区渲染新输入的信息为指定形式
	// console.log(this.value)
	if(edit_time != null) {
		console.log("挥发速度")
		return;
	}
	_str = inputText.value
	edit_time = setTimeout(function(){
		temp = ''
		var temp_el = ''
		var changedFlag = false
		var imgNum = 0
		for(var i = 0; i<_str.length; i++){
			switch(_str[i]){
				case '#':
					if(_str[++i] === 'h'){
						if(typeof parseInt(_str[++i]) === 'number'){
							temp += `<h${_str[i]}>`
							temp_el = `</h${_str[i]}>`  //给遇到的下一个回车符号用
						}
					} else {
						temp += '#' + _str[i]
					}
					break
				case '~':
					if(i+1 < _str.length && _str[++i] === '~'){
						if(i+1 < _str.length && _str[++i] === '~'){
							temp += '<pre>'
							//渲染代码
							while(true){
								if(i+1 < _str.length && _str[++i] === '~'){  //代码段的结尾判断
									if(i+1 < _str.length && _str[++i] === '!'){
										temp += '</pre>'
										break
									} else {
										temp += '~' + _str[i]
										if(i+1>=_str.length) break
									}
								} else {
									temp += _str[i]
									if(i+1>=_str.length) break
								}
							}
						} else if(_str[i] === 'a'){
							// console.log("aa")
							temp += '<a href="'
							var temp_a = ''
							while(true){  //循环查找链接的尾标识符,不符合的都是链接部分
							// console.log("aaa")
								if(i+1 < _str.length && _str[++i] === '/'){
									if(i+1 < _str.length && _str[++i] === 'a'){
										temp += `">${temp_a}</a>`
										// console.log('break')
										break
									}
									else {
										temp += '/'+ _str[i]
										temp_a += '/' + _str[i]
										if(i+1>=_str.length) {
											console.log('break')
											break
										}
									}
								} else {
									temp += _str[i]
									temp_a += _str[i]
									if(i+1>=_str.length) {
										console.log('break')
										break
									}
								}
							}
						} else if( _str[i] === 'i'){ //图片插入渲染
							console.log("图片啊")
							document.getElementById('upPicture').click()   //触发文件选择		
						}
					} else {
						temp += '~' + _str[i]
					} 
					break
				case '\n': 
					if(temp_el != ''){
						temp += temp_el
						temp_el = ''
					} else {
						temp += '<br/>'
					}
					
				case '[':   //遍历图片符号
					if(_str[i+1] === 'i' && _str[i+2] === 'm' && _str[i+3] === 'g' && _str[i+4] === ']'){
						temp += imgArr[imgNum++]
						i = i+4
					} else {
						temp += _str[i]
					}
					break
				case '*':   //判断加粗的位置
					if(i+1<_str.length && _str[i+1] === '*'){
						i++
						temp += '<b>'
						while(true){  //不是结尾标记的时候
							if(i+1 <_str.length && _str[i+1] === '*'){
								i++
								if(i+1 <_str.length && _str[i+1] === '*'){  //是结尾符号**
									i++
									temp += '</b>'
									// console.log('break')
									break
								} else {
									if(i+1>=_str.length){  //因为超出长度退出
										temp += '*'
										break
									}
									temp += '*' + _str[++i]
								}
							} else{
								if(i>=_str.length) break //超出字符串长度退出循环
								temp += _str[++i]  //如果不是因为长度就将其加入
							}
						}
					} else {
						if(i+1>=_str.length){
							temp += '*'
						} else {
							temp += '*' + _str[++i]
						}	
					}
					break
				case ' ':
					// console.log('kongge')
					temp += '&nbsp;'
				default:
					temp += _str[i]
			}
			// console.log("dat",temp)
			document.getElementById('show').innerHTML = temp;
			edit_time = null;
		}
		this.onchange = changeTextEvent
		// clearTimeout(edit_time)
		status_has_time = false
	}, 1000)
	
}
function aaa(){
	fileUp.click()
}
function changeTextEvent(){
	// console.log(temp)
}
function changeFile(imgArr){
	var file = document.getElementById('upPicture').files[0];
	console.log(file)
	// console.log(file.type)
	//如果一个文件被选中
	if(file){
		//一张图片被选中
		console.log(file.type)
		if (/image/.test(file.type)){
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(){
				_src = reader.result;    //获取读取到的base64图像编码
				// console.log(_src)
				changedFlag = true   //将图片获取到标志设置为true
				// console.log(changedFlag)
				temp += `<img src="${_src}" style="width: 100%; height:250px;" alt="图片" />`
				//将图片暂存数组中
				imgArr.push(`<img src="${_src}" style="width: 100%; height:250px;" alt="图片" />`)
				// console.log(imgArr)
				var n = inputText.value.indexOf('~~i')  //图片加载后移除图片插入标识
				var s1 = inputText.value.substring(0,n)
				var s2 = inputText.value.substring(n+3)
				inputText.value = s1 + '[img]' + s2
				document.getElementById('show').innerHTML = temp;
				// msgName.innerHTML = file.name;
			}
		//其他格式文件被选中
		} else {
			alert("You must select a valid image file!");
		}                
	}    
}

/*
var ln = this.value.length/3001  //表示需要用多长的数组来存放,每三千算一堆
每次都插入都比较各自是否和之前相等，相等的不用重新编辑，不相等的就编辑，每次不相等就只替换当前的，不替换后面的


*/