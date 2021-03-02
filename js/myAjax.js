function createXMLHttpObject(){
			var xmlhr = [
				function () { return new XMLHttpRequest();},
				function () { return new ActiveObject("Msxml2.XMLHTTP");},
				function () { return new ActiveObject("Msxml3.XMLHTTP");},
				function () { return new ActiveObject("Microsoft.XMLHTTP");},
			];
			var xhr = false;
			for(var i = 0; i<xmlhr.length; i++){
				try{
					xhr = xmlhr[i]();
				}
				catch(e){
					continue;
				}
				break;
			}
			return xhr;
		}

ajax = function(type, url, str, callback){
	var xmlHttpRe = createXMLHttpObject();
	xmlHttpRe.onreadystatechange = function(){
		if(xmlHttpRe.readyState == 4){
			if(xmlHttpRe.status == 200){
				console.log("请求成功");
				if(callback != null){
					
					callback(xmlHttpRe);
				}
				
			}
		}
	}
	var temp = ''
		if(str.constructor == Array){
			console.log("11")
			for(var i = 0; i<str.length; i++){
				for(var key in str[i]){
					temp += key + '=' + str[i][key] + '&'
				}
			}
			temp =  temp.substring(0, temp.length-1)
		}
		else if(typeof str == 'object'){
			console.log("22")
			for(var key in str){
				temp += key + '=' + str[key] + '&'
			}
			temp =  temp.substring(0, temp.length-1)
		} else {
			temp = str
		}
	console.log(temp)
	if(type == "get"){
		url += "?" + temp;	
		console.log(url)
	}
	xmlHttpRe.open(type, url, true);
	if(type == "post"){
		xmlHttpRe.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	}
	
	
	if(type == "post"){
		xmlHttpRe.send(temp);
	}
	else{
		xmlHttpRe.send(null);
	}
//	xmlHttpRe.open(type, url, true);
//	xmlHttpRe.send(null);
}