var res_data1 = [
	{
		categoryId : 324365,
		name : 170802
	},
	{
		categoryId : 324365,
		name : 170802
	},
	{
		categoryId : 324365,
		name : 170802
	},
	{
		categoryId : 324365,
		name : 170802
	},
	{
		categoryId : 324365,
		name : 170802
	},
	{
		categoryId : 324365,
		name : 170802
	},
	{
		categoryId : 324365,
		name : 170802
	},
	{
		categoryId : 324365,
		name : 170802
	}
]
var data_page = {   //data变量用于
	pageNum : '1',
	pageSize  : '6',
	total : ''
}
var reqPa = {
	categoryId : ''
}
var req_data1 = []
//获取元素
var el_tbody = $('.container .panel table tbody')
//方法
//渲染表格方法
function MakeTable(obj, res){
	var res_table = ''
	for(var i = 0; i<res.length; i++){
		res_table += `<tr class="${i}">
			   			<td class="categoryId">${res[i].categoryId}</td>
			   			<td class="name">${res[i].name}</td>
						<td><span class="btn btn-danger btn-xs btn-del" title="">删除</span></td>
			   		</tr>`
	}
	obj.innerHTML = res_table
}
function resizeIframe(){
	var main = $(window.parent.document).find("#managerIframe");
	var thisheight = $(document).height();
	main.height(thisheight);
}
//事件
//表格的编辑事件
$('#add').on('click', function(){
	var da = {
		categoryId : '',
		name : ''
	}
	var el_tr = document.createElement('tr')
	el_tr.className = res_data1.length + ''
	for(var key in da){
		var e = document.createElement('td')
		e.className = key
		e.style.height = '37px'
		el_tr.appendChild(e)
	}
	el_tbody[0].appendChild(el_tr)
	req_data1.push(da)
	MakeTable(el_tbody[0], req_data1)
	resizeIframe()
})
//事件
//表格删除事件
$('.container .panel table').on('click', function(e){
	if(e.target.nodeName.toUpperCase() === 'SPAN'){
		if(e.target.classList.contains('btn-del')){
			var pa = e.target.parentNode.parentNode
			reqPa.categoryId = pa.getElementsByClassName('categoryId')[0].innerText
			ajax('get', '/resource/deleteResource',reqPa, del_callback)
		}
		ajax('get', '/resource/getResources',data_page, res_callback)
	}
})
el_tbody.on('click', function(e){
	if(e.target.nodeName.toUpperCase() === 'TD'){
		e.target.setAttribute('contentEditable', 'true')
		e.target.addEventListener('blur', function(e){
			var index = e.target.parentNode.className
			console.log(index)
			var c = e.target.className
			console.log(c)
			req_data1[index][c] = e.target.innerText
			e.target.setAttribute('contentEditable', 'false')
			console.log(req_data1)
		})
	}
})

$(function(){
	MakeTable(el_tbody[0], req_data1)
	resizeIframe()
})

//回调
function batchLoadStuInfo_callback(xhr){
	var res = xhr.responseText
	res = rextojson(res)
	res = JSON.parse(res)
	if(res.status === 200){
		alert(res.msg)
		req_data1 = []
	} else {
		alert(res.msg)
	}
}
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
function del_callback(xhr){
	var res = xhr.responseText
	res = JSON.parse(res)
	if(res.status === 200){
		alert(res.msg)
	} else {
		alert(res.msg)
	}
}