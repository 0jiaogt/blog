
var personInfo = new Vue({
	el: '#personInfo',
	data: {
		activeName: 'first',  //选项卡默认项
		collectActiveName: 'first',   //收藏选项卡
		textData: [   //获取某人的文章
			{
				TextId : 1,
				categoryId : 1,
				title : '阿里巴巴向全社会开放黑科技：“泡在水里”的服务器',
				content : '为了让数据中心更绿色，阿里工程曾将服务器“泡在水里”进行散热，节能超70%，今天这项黑科技的神秘面纱被揭开。为了让数据中心更绿色，阿里工程曾将服务器“泡在水里”进行散热，节能超70%，今天这项黑科技的神秘面纱被揭开。',
				author : '4564',
				name: '我是刷个',
				readAccount : 52,
				replyAccount : 88,
				like :  545,
				unlike : 4,
				time : '2019-01-02 15:01:55'
			},
			{
				TextId : 2,
				categoryId : 1,
				title : '遗传算法',
				content : '遗传算法是计算数学中用于解决最优化的搜索算法，是进化算法的一种。进化算法最初是借鉴了进化生物学中的一些现象而发展起来的，这些现象包括遗传、突变、自然选择以及杂交等。其本质是一种高效、并行、全局搜索的方法，能在搜索过程中自动获取和积累有关搜索空间的知识，并自适应地控制搜索过程以求得最佳解。',
				author : '4564',
				name: '我是刷个',
				readAccount : 52,
				replyAccount : 88,
				like :  545,
				unlike : 4,
				time : '2019-01-02 15:01:55'
			},
			{
				TextId : 3,
				categoryId : 1,
				title : '世界上有哪些代码量很少，但很牛逼很经典的算法或项目案例？',
				content : '一个GitHub上的项目，目前标星34k。它的牛逼之处在于它基于轻量级跨平台全自动不可描述工具，采用了不可描述的高级语言语法，不用写一行代码，即可部署运行，提供检测、编译、打包、安装、运行一条龙服务，安全可靠。',
				author : '4564',
				name: '我是刷个',
				readAccount : 52,
				replyAccount : 88,
				like :  545,
				unlike : 4,
				time : '2019-01-02 15:01:55'
			},
			{
				TextId : 4,
				categoryId : 1,
				title : '推荐一个有趣的在线编程游戏',
				content : 'Code Combat是一款学习编程的角色扮演游戏。每一关都用任务的形式设立目标，用实时的反馈及时纠正代码的错误，用游戏的语言来呈现编程的用处。',
				author : '4564',
				name: '我是刷个',
				readAccount : 52,
				replyAccount : 88,
				like :  545,
				unlike : 4,
				time : '2019-01-02 15:01:55'
			}
		],
		textLoading: false,  //文章加载状态
		textTotal: 1000,  //文章总数
		videoData: [
			{
				id: '1',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list4.jpg'
			},
			{
				id: '2',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list5.jpg'
			},
			{
				id: '3',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list6.jpg'
			},
			{
				id: '4',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list7.jpg'
			},
			{
				id: '5',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list8.jpg'
			},
			{
				id: '6',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list9.jpg'
			}
		],
		videoLoading: false,  //视频加载状态
		videoTotal: 1000,   //视频总数
		collectTextData: [   //收藏文章数据
			{
				TextId : 1,
				categoryId : 1,
				title : '阿里巴巴向全社会开放黑科技：“泡在水里”的服务器',
				content : '为了让数据中心更绿色，阿里工程曾将服务器“泡在水里”进行散热，节能超70%，今天这项黑科技的神秘面纱被揭开。为了让数据中心更绿色，阿里工程曾将服务器“泡在水里”进行散热，节能超70%，今天这项黑科技的神秘面纱被揭开。',
				author : '4564',
				name: '我是刷个',
				readAccount : 52,
				replyAccount : 88,
				like :  545,
				unlike : 4,
				time : '2019-01-02 15:01:55'
			},
			{
				TextId : 2,
				categoryId : 1,
				title : '遗传算法',
				content : '遗传算法是计算数学中用于解决最优化的搜索算法，是进化算法的一种。进化算法最初是借鉴了进化生物学中的一些现象而发展起来的，这些现象包括遗传、突变、自然选择以及杂交等。其本质是一种高效、并行、全局搜索的方法，能在搜索过程中自动获取和积累有关搜索空间的知识，并自适应地控制搜索过程以求得最佳解。',
				author : '4564',
				name: '我是刷个',
				readAccount : 52,
				replyAccount : 88,
				like :  545,
				unlike : 4,
				time : '2019-01-02 15:01:55'
			},
			{
				TextId : 3,
				categoryId : 1,
				title : '世界上有哪些代码量很少，但很牛逼很经典的算法或项目案例？',
				content : '一个GitHub上的项目，目前标星34k。它的牛逼之处在于它基于轻量级跨平台全自动不可描述工具，采用了不可描述的高级语言语法，不用写一行代码，即可部署运行，提供检测、编译、打包、安装、运行一条龙服务，安全可靠。',
				author : '4564',
				name: '我是刷个',
				readAccount : 52,
				replyAccount : 88,
				like :  545,
				unlike : 4,
				time : '2019-01-02 15:01:55'
			},
			{
				TextId : 4,
				categoryId : 1,
				title : '推荐一个有趣的在线编程游戏',
				content : 'Code Combat是一款学习编程的角色扮演游戏。每一关都用任务的形式设立目标，用实时的反馈及时纠正代码的错误，用游戏的语言来呈现编程的用处。',
				author : '4564',
				name: '我是刷个',
				readAccount : 52,
				replyAccount : 88,
				like :  545,
				unlike : 4,
				time : '2019-01-02 15:01:55'
			}
		],
		collectTextLoading: false,
		collectTextTotal: 1000,
		collectVideoData: [  //收藏视频
			{
				id: '1',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list4.jpg'
			},
			{
				id: '2',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list5.jpg'
			},
			{
				id: '3',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list6.jpg'
			},
			{
				id: '4',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list7.jpg'
			},
			{
				id: '5',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list8.jpg'
			},
			{
				id: '6',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list9.jpg'
			}
		],
		collectVideoLoading: false,
		collectVideoTotal: 1000,
		fansData: [  //粉丝数据
			{
				likeUserId: '1546',
				name: '小王'
			},
			{
				likeUserId: '32123',
				name: '小美'
			},
			{
				likeUserId: '43224',
				name: '西门子'
			},
			{
				likeUserId: '23245',
				name: '小苏打'
			}
		],
		fansLoading: false,  //粉丝加载状态
		fansTotal: 1000,  //粉丝总数
		likeManData: [   //他关注的人
			{
				likeUserId: '1546',
				name: '小美'
			},
			{
				likeUserId: '32123',
				name: '小王'
			},
			{
				likeUserId: '43224',
				name: '大锤'
			},
			{
				likeUserId: '23245',
				name: '小苏打'
			}
		],
		likeManLoading: false,  //他的关注加载状态
		likeManTotal: 1000,  //他的关注总数
		myFansData: [   //我的粉丝
			{
				likeUserId: '1546',
				name: '小美'
			},
			{
				likeUserId: '32123',
				name: '小王'
			},
			{
				likeUserId: '43224',
				name: '西门吹吹'
			},
			{
				likeUserId: '23245',
				name: '张伟'
			}
		],
		userData: {
			userId: '4546',
			name : '会飞的我猪',
			likeManNum: 15,
			likedNum: 20,
			grade: '6'
		},
		stopFlag1: false,  //加载完毕全部标记
		stopFlag2: false,
		stopFlag3: false,
		stopFlag4: false,
		stopFlag5: false,
		stopFlag6: false,
		tabIndex: '0',  //选项卡的位置
		collectTabIndex: '0',  //收藏选项卡位置
	},
	methods: {
		handleClick(tab, event) {   //选择选选项卡
			console.log(tab, event);
			this.tabIndex = tab.index;
			console.log(this.tabIndex)
		},
		collectHandleClick(tab, event) {
			console.log(tab, event);
			this.collectTabIndex = tab.index;
		},
		textLoad () {  //文章加载
			if(this.stopFlag1 === true) return;
			this.textLoading = true
			setTimeout(() => {
			  this.textData = [...this.textData, ...this.textData]
			  this.textLoading = false
			}, 2000)
			
		  },
		collectTextLoad () {  //文章加载
			if(this.stopFlag3 === true) return;
			this.collectTextLoading = true
			setTimeout(() => {
			  this.collectTextData = [...this.collectTextData, ...this.collectTextData]
			  this.collectTextLoading = false
			}, 2000)
			
		  },
		videoLoad () {  //视频加载
			if(this.stopFlag2 === true) return;
			this.videoLoading = true
			setTimeout(() => {
			  this.videoData = [...this.videoData, ...this.videoData]
			  this.videoLoading = false
			}, 2000)
		  },
		  collectVideoLoad () {  //视频加载
		  	if(this.stopFlag6 === true) return;
		  	this.collectVideoLoading = true
		  	setTimeout(() => {
		  	  this.collectVideoData = [...this.collectVideoData, ...this.collectVideoData]
		  	  this.collectVideoLoading = false
		  	}, 2000)
		    },
		 fansLoad () {  //粉丝加载
			if(this.stopFlag4 === true) return;
		 	this.fansLoading = true
		 	setTimeout(() => {
		 	  this.fansData = [...this.fansData, ...this.fansData]
		 	  this.fansLoading = false
		 	}, 2000)
		   },
		 likeManLoad () {  //关注加载
			if(this.stopFlag5 === true) return;
		 	this.likeManLoading = true
		 	setTimeout(() => {
		 	  this.likeManData = [...this.likeManData, ...this.likeManData]
		 	  this.likeManLoading = false
		 	}, 2000)
		 },
		 lookPersonInfo(userId) {  //查看某人的信息
			 location.href = 'personInfo.html?' + userId;
		 },
		 doAttention(userId) {  //关注某人
			 console.log("关注"+userId) //关注后重新获取信息
		 },
		 judgeAttened(userId) {  //判断用户是否关注过这些人
			 for(var i = 0; i<this.myFansData.length; i++) {
				 // console.log(userId == this.myFansData[i].likeUserId)
				 if(userId == this.myFansData[i].likeUserId) {
					 return true;
				 }
			 }
			 return false;
		 },
		 scorllEvent(event) {  //鼠标滚动事件
		
			 if(document.body.offsetHeight - (document.body.scrollTop+document.documentElement.scrollTop+document.documentElement.clientHeight) <= 100) {
				switch(this.tabIndex) {
					case '0': 
					 this.loadingScroll(this.textLoading, this.textLoad); break;
					case '1':
					 this.loadingScroll(this.videoLoading, this.videoLoad); break;
					case '2':
						if(this.collectTabIndex === '0') {
							this.loadingScroll(this.collectTextLoading, this.collectTextLoad); break;
						} else {
							this.loadingScroll(this.collectVideoLoading, this.collectVideoLoad); break;
						}
						// loadingScroll(); break;
					case '3':
					 this.loadingScroll(this.fansLoading, this.fansLoad); break;
					case '4':
					 this.loadingScroll(this.likeManLoading, this.likeManLoad); break;
				}
				
			 }
		 },
		 loadingScroll(status, func) {   //选中了某个选项卡后被加载数据用
			 if(status === true){
			 	return;
			 }
			 status === true;
			 func();
		 },
		 sendMessage(userId) {//私信某人
			console.log('私信某人')
		 }
	},
	computed: {
	  noMore () {
		if(this.textData.length >= this.textTotal) {
			this.stopFlag1 = true;
		}
		return this.textData.length >= this.textTotal;
		// console.log(this.textTotal)
	  },
	  disabled () {
		return this.textLoading || this.noMore
	  },
	  videoNoMore () { 
		  if(this.videoData.length >= this.videoTotal) {
		  	this.stopFlag2 = true;
		  }
	  		return this.videoData.length >= this.videoTotal;
	  },
	  videoDisabled () {
	  		return this.videoLoading || this.videoNoMore
	  },
	  collectVideoNoMore () {
	  		  if(this.collectVideoData.length >= this.collectVideoTotal) {
	  		  	this.stopFlag6 = true;
	  		  }
	  		return this.collectVideoData.length >= this.collectVideoTotal;
	  },
	  collectVideoDisabled () {
	  		return this.collectVideoLoading || this.collectVideoNoMore
	  },
	  collectTextNoMore () {
	  		  if(this.collectTextData.length >= this.collectTextTotal) {
	  		  	this.stopFlag3 = true;
	  		  }
	  		return this.collectTextData.length >= this.collectTextTotal;
	  },
	  collectTextDisabled () {
	  		return this.collectTextLoading || this.collectTextNoMore
	  },
	  fansNoMore () {
		  if(this.fansData.length >= this.fansTotal) {
		  	this.stopFlag4 = true;
		  }
	  		return this.fansData.length >= this.fansTotal;
	  },
	  fansDisabled () {
	  		return this.fansLoading || this.fansNoMore
	  },
	  likeManNoMore () {
		  if(this.likeManData.length >= this.likeManTotal) {
		  	this.stopFlag5 = true;
		  }
	  		return this.likeManData.length >= this.likeManTotal;
	  		
	  },
	  likeManDisabled () {
	  		return this.likeManLoading || this.likeManNoMore
	  },
	},
	mounted() {
		this.textTotal = 40;
		this.videoTotal = 40;
		this.fansTotal = 40;
		this.likeManTotal = 40;
		this.collectVideoTotal = 40;
		document.getElementsByTagName('body')[0].addEventListener("mousewheel", this.scorllEvent)
	}
})