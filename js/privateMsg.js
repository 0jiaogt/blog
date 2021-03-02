Vue.component('vScroll', {
	props: {
		func: {
			type: [Function]
		},
		value: {
			type: [String, Number],
		}
	},
	render(h) {
		var _this = this;
		console.log("aaa", this)
		// this.addEvent();
		return	h('div', {
					attrs: {
						class: 'el-scroll',
					},
					ref: 'vScroll'
					},
					[
						h('span', {
							on: {
								mousedown() {
									console.log("dianji",this.value, _this)
									_this.addEvent();
								},
								
							},
							ref: 'vSpan'
						}),
						h('div', {
							ref: 'vDiv'
						}),
					
					]
				)			
	},
	methods: {
		setHeight(h) {
			this.$refs.vScroll.style.height = h + 'px';
		},
		move(event) {
			// console.log(parseInt(this.$refs.vScroll.style.height))
			event = event || window.event;
			event.target = event.target || event.srcElement;
			event.mx = event.pageX || event.clientX + document.documentElement.clientScrollLeft;
			event.my = event.pageY || event.clientY + document.documentElement.clientScrollTop;
			console.log(this.func())
			
			var l = event.my - this.func();
			console.log(l, this.$refs.vSpan, this.func());
			if(l+80 <=parseInt(this.$refs.vScroll.offsetHeight) && l>=25){
				this.$refs.vSpan.style.top = l - 40 + "px";		
				var t = parseFloat(l / this.$refs.vScroll.offsetHeight)*(this.$refs.vScroll.previousElementSibling.offsetHeight - this.value);
				if(this.$refs.vScroll.previousElementSibling.offsetHeight<this.value){
					return ;
				}
				console.log(l, t)
				this.$refs.vScroll.previousElementSibling.style.top = - (t+50) + "px";
			}
		},
		stop(event) {
			event = event || window.event;
			event.target = event.target || event.srcElement;
			this.$refs.vScroll.removeEventListener('mousemove', this.move);
			this.$refs.vScroll.removeEventListener('mouseup', this.stop)
		},
		addEvent() {
			console.log("bbb")
			this.$refs.vScroll.addEventListener('mousemove', this.move)
			this.$refs.vScroll.addEventListener('mouseup', this.stop)
			this.$refs.vScroll.addEventListener('mouseleave', this.stop)
		},
		
	},
	mounted() {
		this.setHeight(this.value)
	}
})
var privateMsg = new Vue({
	el: '#privateMsg',
	data: {
		listData: [
			{
				Id: '12',
				userId: '21',
				Name: '我是帅哥',
				Content: '喜欢',
				lookFlagCount: 0,
				src: '../public/images/head.jpg',
				time: '2020-03-22 12:00:01'
			},
			{
				Id: '13',
				userId: '21',
				Name: '无名',
				Content: '路过..',
				lookFlagCount: 5,
				src: '../public/images/小星.jpg',
				time: '2020-03-22 12:20:01'
			},
			{
				Id: '14',
				userId: '21',
				Name: '小美',
				Content: '在干嘛',
				lookFlagCount: 4,
				src: '../public/images/list1.jpg',
				time: '2020-03-22 11:00:01'
			},
			{
				Id: '15',
				userId: '21',
				Name: '靓仔',
				Content: '喜欢吃哦',
				lookFlagCount: 3,
				src: '../public/images/list2.jpg',
				time: '2020-03-12 12:00:01'
			},
			{
				Id: '16',
				userId: '21',
				Name: '小王',
				Content: '喜欢你',
				lookFlagCount: 2,
				src: '../public/images/list3.jpg',
				time: '2020-03-22 11:00:01'
			},
			{
				Id: '17',
				userId: '21',
				Name: '我是帅哥',
				Content: '喜欢你',
				lookFlagCount: 2,
				src: '../public/images/list4.jpg',
				time: '2020-03-22 19:10:01'
			},
			{
				Id: '18',
				userId: '21',
				Name: '我是帅哥',
				Content: '喜欢你',
				lookFlagCount: 2,
				src: '../public/images/list5.jpg',
				time: '2020-03-22 12:00:01'
			},
			{
				Id: '19',
				userId: '21',
				Name: '我是帅哥',
				Content: '喜欢你',
				lookFlagCount: 2,
				src: '../public/images/baiyun.jpg',
				time: '2020-03-22 12:00:01'
			},
			{
				Id: '20',
				userId: '21',
				Name: '我帅哥',
				Content: 'buzh',
				lookFlagCount: 2,
				src: '../public/images/baiyun.jpg',
				time: '2020-03-22 12:00:01'
			},
			{
				Id: '21',
				userId: '21',
				Name: '我是帅',
				Content: '不',
				lookFlagCount: 2,
				src: '../public/images/baiyun.jpg',
				time: '2020-03-22 12:00:01'
			}
		],
		messageStr: '',   //聊天框信息
		sendInfo: {
			id: '',
			sendId: '',
			content: this.messageStr,
			time: ''
		},
		textarea: {
			minRows: 1,
			maxRows: 5
		},
		infoList: [
			{
				sendId: '3421',
				content: '你在干嘛呢？',
				time: '2012-12-10 10:10:01'
			},
			{
				sendId: '3422',
				content: '吃鸡蛋哦',
				time: '2012-12-10 10:10:12'
			},
			{
				sendId: '3421',
				content: '呀呀呀',
				time: '2012-12-10 10:10:44'
			},
			{
				sendId: '3422',
				content: '哈哈哈~',
				time: '2012-12-10 10:14:04'
			}
		],
		beContactEd: {
			userId: '3421',
			name: '林则徐',
			src: '../public/images/list6.jpg'
		},
		
	},
	methods: {
		sendMessage() {   //发送消息
			if(this.messageStr === '') {
				this.$message({
				  message: '警告哦，这是一条警告消息',
				  type: 'warning'
				});
				return;
			}
			this.sendInfo.content = this.messageStr;
			console.log(this.sendInfo.content)
			this.messageStr = '';
		},
		judgeContactId(userId) {  //判断id是否和本号相同
			if(userId === '3422') {
				
				return true;
			}
			return false;
		},
		judgeTimeShow(index) {   //判断时间是否需要显示, 根据现在的位置和前一个位置时间比较
			if(index === 0) return true;  
			var date1 = new Date(this.infoList[index-1].time);
			var date2 = new Date(this.infoList[index].time);
			if((date2.getMinutes() - date1.getMinutes()) >= 4) {
				return true;
			}
			return false;
		},
		getPersonInfo(userId) {  //查看某人信息
			location.href = "personInfo.html?userId=" + userId;
		},
		getcommuniteData(id, index) {  //获取聊天内容,根据聊天id
			this.listData[index].lookFlagCount = 0;
			
			this.sendInfo.id = id;
			console.log(id, this.sendInfo.id)
		},
		judgeBadgeShow(num) {  //判断是否有新数据，有才显示消息条数
			if(num <= 0) {
				return false;
			}  
			return true;
		},
		scroll(s, event) {  //鼠标滚动事件
			console.log(event)
			event =event || window.event; 
			obj = this.$refs[s];
			console.log(obj.children[1])
			if(event.wheelDelta){            //判断浏览器IE，谷歌滑轮事件    
				 if(event.wheelDelta>0){  //当滑轮向上滚动时  
				
						var l = obj.children[1].children[0].offsetTop;
						if(l <= obj.children[1].offsetHeight && l-100 >=0){
							obj.children[1].children[0].style.top = l - 100 + "px";
						} else {
							obj.children[1].children[0].style.top = 0 + "px";
						}
						if(obj.children[0].offsetHeight -obj.children[1].offsetHeight<0) {
							return;
						}
						var t = parseFloat(l / obj.children[1].offsetHeight)*(obj.children[0].offsetHeight -obj.children[1].offsetHeight);
						obj.children[0].style.top = - (t+80) + "px";
					}  
					 if(event.wheelDelta<0){          //当滑轮向下滚动时  
						var l = obj.children[1].children[0].offsetTop;
						if(l+200 < obj.children[1].offsetHeight && l>=0){
							obj.children[1].children[0].style.top = l + 100 + "px";
						} else {
							obj.children[1].children[0].style.top = obj.children[1].offsetHeight - 120  + "px";
						}
						if(obj.children[0].offsetHeight -obj.children[1].offsetHeight<0) {
							return;
						}
						var t = parseFloat(l / obj.children[1].offsetHeight)*(obj.children[0].offsetHeight -obj.children[1].offsetHeight);
						console.log(t )
						obj.children[0].style.top = - (t +80)  + "px";
					 } 
				}else if(event.detail){             //Firefox滑轮事件  
					if(event.detail>0){         //当滑轮向下滚动时  
						 var l = obj.children[1].children[0].offsetTop;
						 if(l+200 < obj.children[1].offsetHeight && l>=0){
						 	obj.children[1].children[0].style.top = l + 100 + "px";
						 } else {
						 	obj.children[1].children[0].style.top = obj.children[1].offsetHeight - 120  + "px";
						 }
						 if(obj.children[0].offsetHeight -obj.children[1].offsetHeight<0) {
						 	return;
						 }
						 var t = parseFloat(l / obj.children[1].offsetHeight)*(obj.children[0].offsetHeight -obj.children[1].offsetHeight);
						 obj.children[0].style.top = - (t  - 50) +10 + "px";
				 }  
				if(event.detail<0){            //当滑轮向上滚动时  
					var l = obj.children[1].children[0].offsetTop;
					if(l <= obj.children[1].offsetHeight && l-100 >=0){
						obj.children[1].children[0].style.top = l - 100 + "px";
					} else {
						obj.children[1].children[0].style.top = 0 + "px";
					}
					if(obj.children[0].offsetHeight -obj.children[1].offsetHeight<0) {
						return;
					}
					var t = parseFloat(l / obj.children[1].offsetHeight)*(obj.children[0].offsetHeight -obj.children[1].offsetHeight);
					obj.children[0].style.top = - (t  - 20) + "px";
				}
			}
		},
		getTop() {   //获取元素到顶部的距离
			console.log(this.$refs.elTant.offsetTop)
			return this.$refs.elTant.offsetTop
		},
		getHeight() {  //获取滚动内容高度
			return this.$refs.elTant.children[0].offsetHeight
		}
	},
	mounted() {
		// this.getHeight();
	}
})