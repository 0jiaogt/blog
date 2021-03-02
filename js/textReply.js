var data_page = {   //data变量用于
	pageNum : '1',
	pageSize  : '6',
	total : ''
}
//获取元素
var el_search = $('.panel .search .btn')
var el_tbody = $('.container .panel table tbody')
var reqPa = {
	replyId : ''
}
//方法
//渲染表格方法
function makeTable(obj, res){
	var res_table = ''
	for(var i = 0; i<res.length; i++){
		res_table += `<tr>
			   			<td class="r_id">${res[i].replyId}</td>
			   			<td>${res[i].commentId}</td>
			   			<td>${res[i].userId}</td>
			   			<td>${res[i].content}</td>
			   			<td>${res[i].time}</td>
						<td><span class="btn btn-danger btn-sm btn-del">删除</span></td>
			   		</tr>`
	}
	if(res_table != '' && res_table != null){
		obj.innerHTML = res_table
		var main = $(window.parent.document).find("#managerIframe");
		var thisheight = $(document).height();
		main.height(thisheight);
	}
}
//事件
//搜索事件
el_search.on('click', function(){
	req = {}
	var input = $('.panel .search input')
	if(input.val() === ''){
		ajax('get', '/resource/getUsersInfo',data_page, res_callback)
	}
	else{
		req.id = input.val()
		ajax('get', '/resource/getUserInfoById',req, search_callback)
	}
	console.log(req)
})


//事件
//表格事件
$('.container .panel table').on('click', function(e){
	if(e.target.nodeName.toUpperCase() === 'SPAN'){
		if(e.target.classList.contains('btn-del')){
			var pa = e.target.parentNode.parentNode
			reqPa.replyId = pa.getElementsByClassName('r_id')[0].innerText
			ajax('get', '/resource/deleteResource',reqPa, del_callback)
		}
		ajax('get', '/resource/getResources',data_page, res_callback)
	}
})
$('.container .panel form.search span.btn-search').on('click', function(){
	var text = $('.container .panel form.search input').val()
	console.log(text)
	ajax('get', '/resource/getResources',data_page, res_callback)
})
$(function(){
	
	ajax('get', '/resource/getResources',data_page, res_callback)
	
})
//回调
function res_callback(xhr){
	var res = xhr.responseText
	console.log(res)
	if(StringtoJson(res)){
		res = StringtoJson(res)
	}
	res = JSON.parse(res)
	if(res.status === 200){
		data_page.total = res.total
		startPage(data_page, page_callback)
		makeTable(el_tbody[0], res.data)
	} else {
		alert(res.msg)
	}
}
function search_callback(xhr){
	var res = xhr.responseText
	
	if(StringtoJson2(res)){
		res = StringtoJson2(res)
	}
	
	res = JSON.parse(res)
	console.log(res)
	if(res.status === 200){
		var te = []
		te.push(res.data)
		getTableData(el_tbody, te)
	} else {
		alert(res.msg)
	}
}
function del_callback(xhr){
	var res = xhr.responseText
	res = JSON.parse(res)
	if(res.status === 200){
		alert(res.msg)
	} else {
		alert(res.msg)
	}
}
function callback(xhr){
	var res = xhr.responseText
	console.log(res)
	res = JSON.parse(res)
	if(res.status === 200){
		alert(res.msg)
	} else {
		alert(res.msg)
	}
}
function page_callback(){
	ajax('get', '/resource/getResources',data_page, res_callback)
}
//调用
//makeTable(el_tbody[0], res_data1)
