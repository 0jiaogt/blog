var res_data1 = [
	{
		studentId : 324365,
		teacher : '吴老师',
		operation_A : '<span class="btn btn-info btn-xs btn-edit">编辑</span>',
		operation_B : '<span class="btn btn-info btn-xs btn-edit">编辑</span>'
	},
	{
		studentId : 324365,
		teacher : '吴老师',
		operation_A : '<span class="btn btn-info btn-xs btn-edit">编辑</span>',
		operation_B : '<span class="btn btn-info btn-xs btn-edit">编辑</span>'
	},
	{
		studentId : 324365,
		teacher : '吴老师',
		operation_A : '<span class="btn btn-info btn-xs btn-edit">编辑</span>',
		operation_B : '<span class="btn btn-info btn-xs btn-edit">编辑</span>'
	},
	{
		studentId : 324365,
		teacher : '吴老师',
		operation_A : '<span class="btn btn-info btn-xs btn-edit">编辑</span>',
		operation_B : '<span class="btn btn-info btn-xs btn-edit">编辑</span>'
	},
	{
		studentId : 324365,
		teacher : '吴老师',
		operation_A : '<span class="btn btn-info btn-xs btn-edit">编辑</span>',
		operation_B : '<span class="btn btn-info btn-xs btn-edit">编辑</span>'
	},
	{
		studentId : 324365,
		teacher : '吴老师',
		operation_A : '<span class="btn btn-info btn-xs btn-edit">编辑</span>',
		operation_B : '<span class="btn btn-info btn-xs btn-edit">编辑</span>'
	},
	{
		studentId : 324365,
		teacher : '吴老师',
		operation_A : '<span class="btn btn-info btn-xs btn-edit">编辑</span>',
		operation_B : '<span class="btn btn-info btn-xs btn-edit">编辑</span>'
	},
	{
		studentId : 324365,
		teacher : '吴老师',
		operation_A : '编辑',
		operation_B : '编辑'
	}
]
var req_data1 = []
//获取元素
var el_tbody = $('.container .panel table tbody')
//方法
//渲染表格方法
// function MakeTable(obj, res){
// 	var res_table = ''
// 	for(var i = 0; i<res.length; i++){
// 		res_table += `<tr class="${i}">
// 			   			<td class="studentId">${res[i].studentId}</td>
// 			   			<td class="teacher">${res[i].teacher}</td>
// 			   			<td class="operation_A"><span class="btn btn-info btn-xs btn-edit">${res[i].operation_A}</span></td>
// 			   			<td class="operation_B"><span class="btn btn-danger btn-xs btn-edit">${res[i].operation_B}</span></td>
// 			   		</tr>`
// 	}
// 	obj.innerHTML = res_table
// }
function resizeIframe(){
	var main = $(window.parent.document).find("#managerIframe");
	var thisheight = $(document).height();
	main.height(thisheight);
}
//事件
//表格的编辑事件
$('#add').on('click', function(){
	var da = {
		studentId : '',
		teacher : '',
		operation_A : '编辑',
		operation_B : '删除'
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

//导入
$('#add_in').on('click', function(){
	console.log(req_data1)
	for(var i = 0; i<req_data1.length; i++){  //清楚不符合要求的项
		if(req_data1[i].studentId === ''){
			req_data1.splice(i,1)
		}
		if(req_data1[i].majorOrEle === '必修'){
			req_data1[i].majorOrEle = 0
		} else {
			req_data1[i].majorOrEle = 1
		}
	}
	console.log(req_data1)
	ajax('post', '/resource/batchLoadStuInfo', req_data1, batchLoadStuInfo_callback)
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
//方法调用
