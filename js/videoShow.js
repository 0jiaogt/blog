

var app = new Vue({
	el: '#app',
	data: {
		playStatus: false,
		volume: 0.1,
		volumeStatus: false,
		rateStatus: false,
		rate: [
			{ rName: 2.0} , { rName: 1.75}, { rName: 1.5}, { rName: 1.25} ,{ rName: 1.0}
		],
		fulScreenStatus: false,  //默认不全屏
		totalTime: 0,  //视频总时长
		bufferData: 0,  //视频缓存
		ctrolTimer: null,  //控制显示和隐藏控制组件
		commendVideo: [
			{
				TextId : "1",
				categoryId : "1",
				title : "这是一个美丽而且和谐的故事，不知道你会不会喜欢，我很喜欢",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list2.jpg"
			},
			{
				TextId : "2",
				categoryId : "1",
				title : "这是一个美丽而且和谐的故事，不知道你会不会喜欢，我很喜欢",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list4.jpg"
			},
			{
				TextId : "3",
				categoryId : "1",
				title : "这是一个美丽而且和谐的故事，不知道你会不会喜欢，我很喜欢",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list5.jpg"
			},
			{
				TextId : "4",
				categoryId : "1",
				title : "这是一个美丽而且和谐的故事，不知道你会不会喜欢，我很喜欢",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list6.jpg"
			},
			{
				TextId : "5",
				categoryId : "1",
				title : "这是一个美丽而且和谐的故事，不知道你会不会喜欢，我很喜欢",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list7.jpg"
			},
			{
				TextId : "6",
				categoryId : "1",
				title : "这是一个美丽而且和谐的故事，不知道你会不会喜欢，我很喜欢",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list8.jpg"
			},
			{
				TextId : "7",
				categoryId : "1",
				title : "这是一个美丽而且和谐的故事，不知道你会不会喜欢，我很喜欢",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list9.jpg"
			}
		],
		danmuStatus: true,  //弹幕状态默认开
		makeDanmu: '',   //发送弹幕消息
		isLogin: true,  //登录状态
		isLike: false,  //是否喜欢
		isCollect: false,  //是都收藏
		makeCommend: '',  //发送评论消息
		makeReply: '',    //发送回复消息
		commentData: [   //评论数据
			{
				commentId: "1",
				textId: "2",
				name : "小蜜蜂",
				userId: "4354",
				content: "觉得up主不错的过来集合！！！",
				like: "22001",
				time: "2020-01-01 11:00:00",
				src: "../public/images/head.jpg",
				children: [
					{
						replyId: "1",
						commentId: "1",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "1",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "2",
						commentId: "1",
						userId: "2465",
						name : "刘阳阳",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "2",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "3",
						commentId: "1",
						userId: "2465",
						name : "贝克汉姆",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "3",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "4",
						commentId: "1",
						userId: "2465",
						name : "钟无艳",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "4",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "5",
						commentId: "1",
						userId: "2465",
						name : "刘易斯",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "5",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					}
				]
			},
			{
				commentId: "2",
				textId: "2",
				name : "志军",
				userId: "4354",
				content: "这个视频真的非常不错，适合大部人",
				like: "200",
				time: "2020-01-01 11:00:00",
				src: "../public/images/head.jpg",
				children: [
					{
						replyId: "1",
						commentId: "2",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '志军',
						content: "已转",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "2",
						commentId: "2",
						userId: "2465",
						name : "小帅哥",
						beReplyId: '3415',
						beReplyName: '志军',
						content: "老铁666啊",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "3",
						commentId: "2",
						userId: "2465",
						name : "潇洒哥",
						beReplyId: '3415',
						beReplyName: '志军',
						content: "这个视频无敌",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "4",
						commentId: "2",
						userId: "2465",
						name : "冰神",
						beReplyId: '3415',
						beReplyName: '志军',
						content: "有眼光",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "5",
						commentId: "2",
						userId: "2465",
						name : "大卫",
						beReplyId: '3415',
						beReplyName: '志军',
						content: "插个眼",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					}
				]
			},
			{
				commentId: "3",
				textId: "2",
				name : "王大锤",
				userId: "4354",
				content: "吹爆这个视频",
				like: "200",
				time: "2020-01-01 11:00:00",
				src: "../public/images/head.jpg",
				children: [
					{
						replyId: "1",
						commentId: "3",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '王大锤',
						content: "非常赞",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "2",
						commentId: "3",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '王大锤',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "3",
						commentId: "3",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '王大锤',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "4",
						commentId: "3",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '王大锤',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "5",
						commentId: "3",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '王大锤',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					}
				]
			},
			{
				commentId: "4",
				textId: "2",
				name : "小蜜蜂",
				userId: "4354",
				content: "大厦的撒娇好的就卡省的就卡省的就还是安居客的杀菌回到家喀什",
				like: "200",
				time: "2020-01-01 11:00:00",
				src: "../public/images/head.jpg",
				children: [
					{
						replyId: "1",
						commentId: "4",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "2",
						commentId: "4",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "3",
						commentId: "4",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "4",
						commentId: "4",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "5",
						commentId: "4",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					}
				]
			},
			{
				commentId: "5",
				textId: "2",
				name : "小蜜蜂",
				userId: "4354",
				content: "大厦的撒娇好的就卡省的就卡省的就还是安居客的杀菌回到家喀什",
				like: "200",
				time: "2020-01-01 11:00:00",
				src: "../public/images/head.jpg",
				children: [
					{
						replyId: "1",
						commentId: "5",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "2",
						commentId: "5",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "3",
						commentId: "5",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					},
					{
						replyId: "4",
						commentId: "5",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					},
					{
						replyId: "5",
						commentId: "5",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					}
				]
			}
		],
		dialogReplyVisible: false,  //评论对话框的状态
		curCommentId: '',   //目前被回复的评论id
		curUserId: '', //目前被回复的用户id 
		curName: '',   //目前被回复的用户名字
		attenStatus: false,  //关注状态，我是否关注他了
		videoData: {  //当前视频数据
			videoId : 1,
			categoryId : 1,
			cateName: 'UI',
			title : 'ps教学',
			src: '../public/video/初音.mp4',
			author : '4521',
			name: '风吹过的地儿',
			readAccount : 500,
			replyAccount : 60,
			like : 80,
			unlike : 12,
			time : '2019-12-11 13:01:22'
		},
		commentPage: {  //评论
			commentCurrentPage: 4,  //评论当前页
			total: 1000,   //页码总数
		},
		author: {
			userId: '4521',
			name: '风吹过的地儿',
			likeManNum : 20,
			likedNum : 12,
			grade: 7
	
		}
	},
	methods: {
		ctrolProgress(event) {
			this.$refs.progressBar.addEventListener('mousemove', this.move)
			this.$refs.progressBar.addEventListener('mouseup', this.stop)
		},
		move(event){ //移动进度条
			event = event || window.event;
			event.target = event.target || event.srcElement;
			event.mx = event.pageX || event.clientX + document.documentElement.clientScrollLeft;
			event.my = event.pageY || event.clientY + document.documentElement.clientScrollTop;
			var l = event.mx - this.$refs.leftBox.offsetLeft;
			if(l+4 <=854 && l>=0){
				this.$refs.slipBtn.style.left = l - 4  + "px";
				this.$refs.progress.style.width = l  +"px";
				this.$refs.video.currentTime = l/850*this.totalTime;
				
			}
		},
		stop(event){   //移动停止时0
			event = event || window.event;
			event.target = event.target || event.srcElement;
			this.$refs.progressBar.removeEventListener('mousemove', this.move)
			this.$refs.progressBar.removeEventListener('mouseup', this.stop)
		},
		goProgress(event) {
			this.move();
		},
		ctrolColume(event) {
			this.$refs.ctrolVolume.addEventListener('mousemove', this.moveColume)
			this.$refs.ctrolVolume.addEventListener('mouseup', this.stopColume)
		},
		moveColume(event){ //移动进度条
			event = event || window.event;
			event.target = event.target || event.srcElement;
			event.mx = event.pageX || event.clientX + document.documentElement.clientScrollLeft;
			event.my = event.pageY || event.clientY + document.documentElement.clientScrollTop;
			var l = event.mx - this.$refs.leftBox.offsetLeft - this.$refs.ctrolVolume.offsetLeft;
			if(l <=100 && l>=0){
				this.$refs.columeBtn.style.left = l - 2 + "px";
				this.$refs.curColume.style.width = l +"px";
				this.$refs.video.volume = l/100;
				this.volume = l/100;
				if(this.$refs.video.volume === 0) {
					this.$refs.volume.style.backgroundImage = "url('../public/icons/noSound2.svg')" ;
				} else {
					this.$refs.volume.style.backgroundImage = "url('../public/icons/sound.svg')" ;
				}
			}
		},
		stopColume(event){   //移动停止时
			event = event || window.event;
			event.target = event.target || event.srcElement;
			this.$refs.ctrolVolume.removeEventListener('mousemove', this.moveColume)
			this.$refs.ctrolVolume.removeEventListener('mouseup', this.stopColume)
		},
		goColume(event) {
			this.move();
		},
		playOrPauseHandle() {
			this.playStatus = !this.playStatus;
			console.log(this.playStatus)
			
			if(this.playStatus) {
				this.$refs.video.play();
				this.$refs.playOrPause.style.backgroundImage = "url('../public/icons/pause2_2.svg')" ;
			} else {
				this.$refs.video.pause();
				this.$refs.playOrPause.style.backgroundImage = "url('../public/icons/play.svg')" ;
			}
		},
		volumeHandle() {
			this.volumeStatus = !this.volumeStatus;
			if(this.volumeStatus) {
				this.$refs.video.volume = this.volume;  //设置音量
				console.log(this.volume)
				this.$refs.volume.style.backgroundImage = "url('../public/icons/sound.svg')" ;
			} else {
				this.$refs.video.volume = 0;
				this.$refs.volume.style.backgroundImage = "url('../public/icons/noSound2.svg')" ;
			}
		},
		handleSpeed() {   //操作视频获取速率
			this.rateStatus = !this.rateStatus;
		}, 
		selectSpeed(index) {  //选择视频速度
			this.rateStatus = false;
			this.$refs.video.playbackRate = this.rate[index].rName;
			switch(this.rate[index].rName){
				case 1: this.$refs.speedIcon.style.backgroundImage = "url('../public/icons/speed1.0_1.svg')";
				console.log("ss")
					break;
				case 1.25: this.$refs.speedIcon.style.backgroundImage = "url('../public/icons/speed1.25_1.svg')";
					break;
				case 1.5: this.$refs.speedIcon.style.backgroundImage = "url('../public/icons/speed1.5_1.svg')";
					break
				case 1.75: this.$refs.speedIcon.style.backgroundImage = "url('../public/icons/speed1.75_1.svg')";
					break;
				case 2.0: this.$refs.speedIcon.style.backgroundImage = "url('../public/icons/speed2.0_1.svg')";
					break;
				default: this.$refs.speedIcon.style.backgroundImage = "url('../public/icons/speed_1.svg')";
					console.log("fff")
			}
		},
		handleScreenFul() {
			var e = this.$refs.video;
			var doc = document;
			this.fulScreenStatus = !this.fulScreenStatus;
			if(this.fulScreenStatus) {
				if(e.webkitRequestFullScreen) {
					e.webkitRequestFullScreen();
				} else if(e.mozRequestFullScreen) {
					e.mozRequestFullScreen();
				} else if(e.requestFullscreen){
					e.requestFullscreen();
				}
			} else {
				if(doc.webkitCancelFullScreen) {
					doc.webkitCancelFullScreen();
				} else if(doc.mozCancelFullScreen) {
					doc.mozCancelFullScreen();
				} else if(doc.requestFullscreen){
					doc.exitFullscreen();
				}
			}
		},
		doubleScreenFulScreen() { //双击全屏
			this.handleScreenFul();
		},
		loadedmetadata() {   //检测完视频时长
			var videoTime = Math.floor(this.$refs.video.duration);
			this.totalTime = videoTime;
			this.videoBuffer();
			this.likeAndGood();
			if(sessionStorage.getItem("token")) {
				this.isLogin = true;
			}
			document.onkeyup = event => { //监听键盘事件
				
				if(event.target.tagName.toUpperCase() === 'INPUT' || event.target.tagName.toUpperCase() === "TEXTAREA"){
					return
				} else {
					var e_video = this.$refs.video;
					switch(event.keyCode){
						case 37: if(e_video.currentTime - 5 >=0) {
								e_video.currentTime = e_video.currentTime - 5;
								this.move(e_video.currentTime);
							}
							break;
						case 38: if(e_video.volume + 0.1 <=1) {
								e_video.volume = e_video.volume + 0.1;
							}
							break;
						case 39: if(e_video.currentTime + 5 <=this.totalTime) {
								e_video.currentTime = e_video.currentTime + 5;
								this.move(e_video.currentTime);
							}
							break;
							
						case 40: if(e_video.volume - 0.1 >=0) {
								e_video.volume = e_video.volume - 0.1;
							}
							break;
						case 32: this.playOrPauseHandle(); 
								break;
					}
				}
			}
		},
		timeupdate(event) {
			var curTime = event.target.currentTime;
			this.$refs.slipBtn.style.left = this.formatSecondToWidth(curTime) - 4 + 'px';
			this.$refs.progress.style.width = this.formatSecondToWidth(curTime) + 'px';
			this.videoBuffer();
			
		}, 
		ended() {
			this.playOrPauseHandle();
		},
		onprogress() {
			
		},
		formatSecondToWidth(s) { //视频秒数转换为宽度
			return s*(850/this.totalTime);
		},
		videoBuffer() { //获取缓存
			var s = this.$refs.video.buffered.end(0)-this.$refs.video.buffered.start(0);	
			if(this.bufferData !== s) {
				this.bufferData = s;
				this.$refs.buffer1.style.width = this.formatSecondToWidth(this.bufferData) + 'px';
			}
		},
		showOrHideCtrols() {   //显示和隐藏控制条
			if(this.ctrolTimer) {
				clearTimeout(this.ctrolTimer);
			}
			this.$refs.ctrolBox.display = "block";
			this.$refs.ctrolBox.style.opacity = "1";
			this.ctrolTimer = setTimeout(() => {
				this.$refs.ctrolBox.style.opacity = "0";
				this.$refs.ctrolBox.display = "none";
			}, 1000)
		},
		mouseenterCtrol() {  //鼠标进入控制条区域
			clearTimeout(this.ctrolTimer)
			this.$refs.ctrolBox.display = "block";
			this.$refs.ctrolBox.style.opacity = "1";
		},
		mouseleaveCtrol() {   //鼠标离开控制条区域
			this.$refs.ctrolBox.display = "none";
			this.$refs.ctrolBox.style.opacity = "0";
		},
		ctrolForKey() {   //键盘控制
			console.log('键盘')
		},
		volumeChange() {   //音量控制
			this.$refs.columeBtn.style.left = this.$refs.video.volume*100 - 2 + 'px';
			this.$refs.curColume.style.width = this.$refs.video.volume*100 + 'px';
		},
		doAttention(userId) {   //关注按钮
			//  var res = this.getReq('attenUser', {  //获取推荐
			// 	likeUserId: sessionStorage.getItem('userId'),
			//	beLikedUserId: userId
			// })
			this.attenStatus = true;
		},
		cancleAttention(userId) {  //取消关注
			//  var res = this.getReq('cancelAtten', {  //获取推荐
			// 	likeUserId: sessionStorage.getItem('userId'),
			//	beLikedUserId: userId
			// })
			this.attenStatus = false;
		},
		sendMSG(userId) {     //私信某人
			location.href = "privateMsg.html?userId=" + userId
		},
		shiftDanmu() {   //弹幕开关
			this.danmuStatus = !this.danmuStatus;
			if(this.danmuStatus) {
				this.$refs.danmu.style.backgroundImage = "url('../public/icons/danmu.svg')";
			} else {
				this.$refs.danmu.style.backgroundImage = "url('../public/icons/noDanmu2.svg')";
			}
		},
		sendDanmu() {  //发送弹幕
			if(this.makeDanmu === ''){
				console.log("弹幕内容为空，请输入内容");
			} else {
				localStorage.setItem("token", "dasd")
				var s = localStorage.getItem("token")
				console.log("发送弹幕", s);		
			}
		},
		likeAndGood() {  //喜欢和收藏
			if(this.isCollect) {
				this.$refs.likeAndGood.children[1].style.backgroundImage = "url('../public/icons/liked.svg')";
			} else {
				this.$refs.likeAndGood.children[1].style.backgroundImage = "url('../public/icons/like.svg')";
			}
			if(this.isLike) {
				this.$refs.likeAndGood.children[0].style.backgroundImage = "url('../public/icons/gooded.svg')";
			} else {
				this.$refs.likeAndGood.children[0].style.backgroundImage = "url('../public/icons/good.svg')";
			}
		},
		videoGood() {  //点赞视频
			if(this.isLike === true) return;
			//	var res = this.getReq('goodVideo', {  
			// 	videoId: this.videoData.videoId,
			//	userId: sessionStorage.getItem('userId')
			// })
			this.isLike = true;
			this.likeAndGood();
		},
		collectVideo() {  //收藏视频
			if(this.isCollect) return;
			//	var res = this.getReq('collectVideo', {  
			// 	videoId: this.videoData.videoId,
			//	userId: sessionStorage.getItem('userId')
			// })
			this.isCollect = true;
			this.likeAndGood();
		},
		sendCommend() {  //发送评论
			if(this.makeCommend === '') {
				this.$message({
				  showClose: true,
				  message: '内容为空，请输入内容！',
				  type: 'error'
				});
			} else {
				//	var res = this.getReq('doVideoComment', {
				// 	videoId: this.videoData.videoId,
				//	userId: sessionStorage.getItem('userId'),
				//  content: this.makeCommend
				// })
				var c = {
					commentId: this.commentData.length+1,
					textId: this.videoData.videoId,
					userId: sessionStorage.getItem('userId'),
					content: this.makeCommend,
					time: this.dateShift(),
					name : sessionStorage.getItem('name'),
					like: 0,
					src: "../public/images/baiyun.jpg",
					children: []
				}
				this.commentData.push(c);
				this.makeCommend = '';
				this.$message({
				  showClose: true,
				  message: '评论成功',
				  type: 'success'
				});
			}
		},
		commendHandle(id, event, index) {  //对评论点赞
			this.commentData[index].like++;
			event.target.style.backgroundImage = "url('../public/icons/zaned.svg')"
		},
		replyHandle(commendId, replyId, event, index, index1) {  //对评论点赞
			console.log(commendId, replyId);
			// this.commentData[index][index1].like++;
			event.target.style.backgroundImage = "url('../public/icons/zaned.svg')"
		},
		goToPersonInfo(userId) {  //查看某人的个人信息
			location.href = "personInfo.html?userId=" + userId;
		},
		doReply(commentId, beReplyId, name) {  //回复评论
			this.dialogReplyVisible = true;
			console.log(commentId, beReplyId);
			this.curCommentId = commentId;
			this.curUserId = beReplyId;
			this.curName = name;
		},
		sendReply() {   //发送评论
			this.dialogReplyVisible = false;
			//	var res = this.getReq('doVideoReply', {
			// 	commentId: this.curCommentId,
			//	userId: sessionStorage.getItem('userId'),
			//  content: this.makeCommend,
			//	beReplyId: this.curUserId
			// })
			var c = {
				replyId: 99999,
				commentId: this.curCommentId,
				userId: sessionStorage.getItem('userId'),
				name :sessionStorage.getItem('name'),
				beReplyId: this.curUserId,
				beReplyName: this.curName,
				content: this.makeReply,
				time: this.dateShift(),
				src: "../public/images/baiyun.jpg",
			}
			for(var i = 0; i<this.commentData.length; i++) {
				if(this.curCommentId === this.commentData[i].commentId) {
					this.commentData[i].children.push(c);
				}
			}
			this.makeReply = '';
			this.$message({
			  showClose: true,
			  message: '回复成功',
			  type: 'success'
			});
		},
		cancleReply() {  //取消评论
			this.dialogReplyVisible = false; 
			this.makeReply = '';
		},
		handleSizeChange(val) {  //评论页码控制
			console.log(val)
			// var res = this.getReq('getVideoComment', {
			// videoId: this.videoData.videoId,
			//	pageSize: 10,
			//	pageNum: val
			// })
			// this.commentData = res.data;
		},
		handleCurrentChange(val) {
			console.log(`当前页2: ${val}`);
			// var res = this.getReq('getVideoComment', {
			// videoId: this.videoData.videoId,
			//	pageSize: 10,
			//	pageNum: val
			// })
			// this.commentData = res.data;
		},
		dateShift() { 
			var d =  new Date();
			var yy = d.getFullYear();
			var mm = d.getMonth() + 1;
			var dd = d.getDate();
			var hh = d.getHours();
			var m = d.getMinutes();
			var ss = d.getSeconds();
			return `${yy}-${mm}-${dd} ${hh}:${m}:${ss}`
		},
		getSearchStr() {    //获取查询字符串转化为对象
			var str = location.search.substring(1);
			if(str === ''){
				return null;
			}
			var s = str.split('&');
			var obj = {};
			for(var i = 0; i<s.length; i++) {
				var n = s[i].indexOf('=');
				var s1 = s[i].substring(0, n);
				var s2 = s[i].substring(n+1);
				obj[s1] = s2;
			}
			return obj;
		},
		async getReq(url, data) {
		  const res =  await axios.get(url, {  //模糊查询
			params: data
		  })
		  if(res.status === 200) {
			 console.log("成功")
			 return res
		  } else {
			 console.log("失败")
		  }
		},
		async postReq(url, data) {
		  const res =  await axios.post(url, {  //模糊查询
			params: data
		  })
		  if(res.status === 200) {
			 console.log("成功")
			 return res
		  } else {
			 console.log("失败")
		  }
		},
		getCategoryById(id) {  //获取分类
			location.href = "videoList.html?categoryId=" + id;
		},
		gotoVideoDetail(videoId) {
			location.href = "videoShow.html?videoId=" + videoId;
		}
	},
	mounted() {
		var searchObj = this.getSearchStr();
		// var res = this.getReq('getVideoById', {  //获取视频
		// 	videoId: searchObj['videoId'],
		// })
		// this.videoData = res.data;
		this.commentPage.commentCurrentPage = 1,
			// var res = this.getReq('getVideoComment', {  //获取评论
			// 	videoId: searchObj['videoId'],
			//	pageSize: 10,
			//	pageNum: this.commentPage.commentCurrentPage
			// })
			// this.commentData = res.data.data;
			this.commentPage.commentCurrentPage++;
			// this.commentPage.total = res.data.total;
			// var res = this.getReq('getUserInfo', {  //获取作者
			// 	userId: this.videoData.author
			// })
			// this.author = res.data;
			// var res = this.getReq('getCommendVideo', {  //获取推荐
			// 	pageSize: 10,
			//	pageNum: 1
			// })
			// this.commendVideo = res.data;
			//	var res = this.getReq('judgeAtten', {  //获取推荐
			// 		userId: this.author.userId
			// })
			// this.attenStatus = res.data;
		this.$refs.video.volume = this.volume;
		this.$refs.curColume.style.width = this.volume*100 + "px";
		this.$refs.columeBtn.style.left = this.volume*100 - 2 + "px";
	}
})