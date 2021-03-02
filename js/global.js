
function dateFormat(d) {  //转化日期未年月
	var date = new Date(d);
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	return `${y}年${m}月`;
}
function getDate(){
	var date = new Date();
	var y = date.getFullYear()
	var m = date.getMonth()+1
	if(m<10){
		m = '0' + m
	}
	var d = date.getDate()
	if(d<10){
		d = '0' + d
	}
	var hh = date.getHours()
	if(hh<10){
		hh = '0' + hh
	}
	var mm = date.getMinutes()
	if(mm<10){
		mm = '0' + mm
	}
	var ss = date.getSeconds()
	if(ss<10){
		ss = '0' + ss
	}
	return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function StringtoJson(res){
	var n1 = res.indexOf('[')
	var n2 = res.indexOf(']')
	var s1 = res.substring(0,n1-1)
	var s2 = res.substring(n1,n2+1)
	var s3 = res.substring(n2+2, res.length)
	res = s1+s2+s3
	return res
	
}
function StringtoJson2(str){
	var n1 = str.indexOf("\"{")
	if(n1<0) return false
	var n2 = str.indexOf("}\"")
	var s1 = str.substring(0, n1)
	var s2 = str.substring(n1+1,n2+1)
	var s3 = str.substring(n2+2)
	str = s1 + s2 + s3
	return str
}
function rextojson(str){
	var reg1 = /\"\[/g
	str = str.replace(reg1, "[")
	var reg2 = /\]\"/g
	str = str.replace(reg2, "]")
	var reg3 = /\"\{/g
	str = str.replace(reg3, "{")
	var reg4 = /\}\"/g
	str = str.replace(reg4, "}")
	console.log(str)
	return str
}