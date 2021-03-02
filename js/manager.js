





//事件
//a事件渲染-iframe 
$('#main-nav ul a').on('click', function(e){
	if(!e.target.classList.contains('collapsed')){
		var src = e.target.href	
		$('iframe')[0].src = src 
		var mainheight = $('#resourceDetail').contents().find("body").height();
		$('#resourceDetail').height(mainheight);
		e.preventDefault()
	}
})
//渲染iframe高度
 $(function(){
	 $('iframe')[0].src = "userInfo.html"
 	var mainheight = $('#managerIframe').contents().find("body").height() - 15;
 	$('#managerIframe').height(mainheight);
 })