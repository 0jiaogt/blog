var data_page = {   //data变量用于
	pageNum : '1',
	pageSize  : '6',
	total : ''
}
//编辑的新对象
var edit_user = {}
//渲染表格数据
var el_tbody = $('.panel .table tbody')
var el_dialog = $('#edit_user .modal-body form')
function getTableData(obj, res){
	var res_data = ''
	for(var i = 0; i<res.length; i++){
		res_data += `<tr> 
			   			<td class="id">${res[i].categoryId}</td>
			   			<td>${res[i].name}</td>
						<td><span class="btn btn-info btn-xs btn-edit" data-toggle="modal" data-target="#edit_user">编辑</span></td>
						<td><span class="btn btn-danger btn-xs btn-edit">删除</span></td>
			   		</tr>`
	}
	if(res_data != '' && res_data != null){
		obj.html(res_data)
	}
}
//渲染编辑信息框,参数1 被渲染的对象，数据
function getDialogData(obj, res){
	var res_formData = `<div class="col-md-12">
							<label>分类编号：</label><span id="categoryId">${res.phone}</span>
						</div>
						<div class="col-md-12">
							<label>分类名称：</label><span id="cate_name">${res.name}</span><input type="text" class="form-control" name="c_name" id="c_name" style="display: none;" value="${res.name}"><span class="btn btn-warning btn-sm btn-edit-name">修改</span>
						</div>`
	obj.html(res_formData)
	//渲染好之后就注册事件
	$('#c_name').on('focus', function(e){
		e.target.addEventListener('blur', function(e){
			console.log(e.target.value)
			$('#cate_name').text(e.target.value)
			edit_user.name = e.target.value
			e.target.style.display = 'none'
			$('#edit_user form span.btn-edit-name').css('display', 'inline-block')
		})
	})
}

//事件
//编辑事件
$('.panel .table').on('click', function(e){
	var req = {}
	if(e.target.nodeName.toUpperCase() === 'SPAN'){
		var el_tr = e.target.parentNode.parentNode
		edit_user.id = el_tr.getElementsByClassName('id')[0].innerText
		console.log(edit_user.id)
		//请求数据
		ajax('get', '/resource/getUserInfoById',{
		id : edit_user.id
	}, getUser_callback)
		
	}
})
//对话框编辑事件
el_dialog.on('click', function(e){
	if(e.target.classList.contains('btn-edit-name')){
		$('#u_name').css('display', 'inline-block')
		$('#user_name').text('')
		e.target.style.display = "none"
		$('#u_name').focus()
	} else if(e.target.classList.contains('btn-edit-phone')){
		$('#u_phone').css('display', 'inline-block')
		$('#user_phone').text('')
		e.target.style.display = "none"
		$('#u_phone').focus()
	} else if(e.target.classList.contains('btn-edit-grade')){
		$('#u_grade').css('display', 'inline-block')
		$('#user_grade').text('')
		e.target.style.display = "none"
		$('#u_grade').focus()
	} else if(e.target.classList.contains('btn-edit-token')){
		$('#u_token').css('display', 'inline-block')
		$('#user_token').text('')
		e.target.style.display = "none"
		$('#u_token').focus()
	} else if(e.target.classList.contains('btn-forbid')){
		$('#say_status').text('禁言状态')
		edit_user.say = 1
		e.target.style.display = 'none'
		e.target.parentNode.getElementsByClassName('btn-relieve')[0].style.display = 'inline-block'
	} else if(e.target.classList.contains('btn-relieve')){
		$('#say_status').text('可发言')
		edit_user.say = 0
		e.target.style.display = 'none'
		e.target.parentNode.getElementsByClassName('btn-forbid	')[0].style.display = 'inline-block'
	} 
})
//确定编辑
$('#push_comment').on('click', function(){
	console.log(edit_user)
	ajax('get', '/resource/updateUserInfo',edit_user, update_callback)
	edit_user = {}
	console.log(edit_user)
	ajax('get', '/resource/getUsersInfo',{
		pageSize: '6',
		pageNum: '1'
	}, stu_callback)
})
$(function(){
	
	ajax('get', '/resource/getUsersInfo',data_page, stu_callback)
	var main = $(window.parent.document).find("#managerIframe");
	var thisheight = $(document).height();
	main.height(thisheight);
})
//回调
function stu_callback(xhr){
	var res = xhr.responseText
	console.log(res)
	if(StringtoJson(res)){
		res = StringtoJson(res)
	}
	
	res = JSON.parse(res)
	if(res.status === 200){
		data_page.total = res.total
		startPage(data_page, page_callback)
		getTableData(el_tbody, res.data)
	} else {
		alert(res.msg)
	}
}
function getUser_callback(xhr){
	var res = xhr.responseText
	console.log(res)
	if(StringtoJson2(res)){
		res = StringtoJson2(res)
	}
	res = JSON.parse(res)
	if(res.status === 200){
		user_edit = {}
		user_edit.id = res.data.id
		getDialogData(el_dialog, res.data)
	} else {
		alert(res.msg)
	}
}

function update_callback(xhr){
	var res = xhr.responseText
	console.log(res)
	if(StringtoJson2(res)){
		res = StringtoJson2(res)
	}
	res = JSON.parse(res)
	if(res.status === 200){
		alert(res.msg)
	} else {
		alert(res.msg)
	}
}

function page_callback(){
	ajax('get', '/resource/getUsersInfo',data_page, stu_callback)
}
//方法调用

