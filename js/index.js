// import Router from '../js/vue-router.js'

var app = new Vue({
	el: '#app',
	data: {
		menu: [
			{
				id: "0",
				name: "文章专区",
				src: "text.html"
			},
			{
				id: "1",
				name: "视频专区",
				src: "videoKind.html"
			},
			{
				id: "2",
				name: "问答专区",
				src: "issue.html"
			},
			{
				id: "3",
				name: "上传资源",
				src: "upload.html"
			}
		],
		isLogin: false,
		liTimer: null,  //定时器
		curPage: 1,
		turnImages: [
			{
				id: "0",
				src: "../public/images/swiper0.jpg"
			},
			{
				id: "1",
				src: "../public/images/swiper1.jpg"
			},
			{
				id: "2",
				src: "../public/images/swiper2.jpg"
			},
			{
				id: "3",
				src: "../public/images/swiper3.jpg"
			}
		],
		texts: [
			{
				TextId : "1",
				categoryId : "1",
				title : "世界上有哪些代码量很少，但很牛逼很经典的算法或项目案例？",
				content : "一个GitHub上的项目，目前标星34k。它的牛逼之处在于它基于轻量级跨平台全自动不可描述工具，采用了不可描述的高级语言语法，不用写一行代码，即可部署运行，提供检测、编译、打包、安装、运行一条龙服务，安全可靠。",
				author : "3117004268",
				name: "黄展乐",
				readAccount : "5",
				replyAccount : "55",
				like: "655",
				unlike: "2",
				time: "2020-02-15", 	
				src: "../public/images/list1.jpg"
			},
			{
				TextId : 2,
				categoryId : 2,
				title : "推荐一个有趣的在线编程游戏",
				content : "Code Combat是一款学习编程的角色扮演游戏。每一关都用任务的形式设立目标，用实时的反馈及时纠正代码的错误，用游戏的语言来呈现编程的用处。",
				author : "3117004268",
				name: "李康远",
				readAccount : 5,
				replyAccount : 35,
				like: 399,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/list2.jpg"
			},
			{
				TextId : 3,
				categoryId : 1,
				title : "遗传算法",
				content : "遗传算法是计算数学中用于解决最优化的搜索算法，是进化算法的一种。进化算法最初是借鉴了进化生物学中的一些现象而发展起来的，这些现象包括遗传、突变、自然选择以及杂交等。其本质是一种高效、并行、全局搜索的方法，能在搜索过程中自动获取和积累有关搜索空间的知识，并自适应地控制搜索过程以求得最佳解。",
				author : "3117004268",
				name: "邝杰超",
				readAccount : 5,
				replyAccount : 55,
				like: 655,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/list3.jpg"
			},
			{
				TextId : 4,
				categoryId : 1,
				title : "阿里巴巴向全社会开放黑科技：“泡在水里”的服务器",
				content : "为了让数据中心更绿色，阿里工程曾将服务器“泡在水里”进行散热，节能超70%，今天这项黑科技的神秘面纱被揭开。为了让数据中心更绿色，阿里工程曾将服务器“泡在水里”进行散热，节能超70%，今天这项黑科技的神秘面纱被揭开。",
				author : "3117004268",
				name: "焦广涛",
				readAccount : 5,
				replyAccount : 55,
				like: 655,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/list4.jpg"
			},
			{
				TextId : 5,
				categoryId : 1,
				title : "惊呆了！Java程序员最常犯的错竟然是这个",
				content : "把 Array 转成 ArrayList。Arrays.asList() 返回的 ArrayList 并不是 java.util.ArrayList，而是 Arrays 的内部私有类 java.util.Arrays.ArrayList。",
				author : "3117004268",
				name: "清风彬",
				readAccount : 5,
				replyAccount : 55,
				like: 655,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/list5.jpg"
			},
			{
				TextId : 6,
				categoryId : 1,
				title : "我的第一篇博客",
				content : "我的第一篇博客，纪念一下，嘻嘻嘻~我是一个C语言初学者，可能对在座的高手来说我就是一个IT小白，但是我不会永远都是小白，或许在下个周、下个月，我会让在座的各位刮目相看。",
				author : "3117004268",
				name: "王二",
				readAccount : 5,
				replyAccount : 55,
				like: 655,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/list6.jpg"
			}
		]
		, scrollListData: [
			 {
				 id: "0",
				 title: "世界上有哪些代码量很少，但很牛逼很经典的算法或项目案例"
			 },
			 {
			 				 id: "1",
			 				 title: "推荐一个有趣的在线编程游戏"
			 },
			 {
			 				 id: "2",
			 				 title: "遗传算法"
			 },
			 {
			 				 id: "3",
			 				 title: "阿里巴巴向全社会开放黑科技：“泡在水里”的服务器"
			 },
			 {
			 				 id: "4",
			 				 title: "惊呆了！Java程序员最常犯的错竟然是这个"
			 },
			 {
			 				 id: "5",
			 				 title: "我的第一篇博客"
			 },
			 {
			 				 id: "6",
			 				 title: "使用一行Python代码从图像读取文本"
			 },
			 {
			 				 id: "7",
			 				 title: "人工智能的数学基础 | AI基础"
			 },
			 {
			 				 id: "8",
			 				 title: "未来 Android 开发的从业方向"
			 },
			 {
			 				 id: "9",
			 				 title: "三十而立~2019年终总结"
			 },
			 {
			 				 id: "10",
			 				 title: "学术大数据在企业专家对接中的应用"
			 },
			 {
			 				 id: "11",
							 title: "树和二叉树"
			 },
			 {
			 				 id: "12",
			 				 title: "疫情这段时间，给大家几个建议"
			 },
			 {
			 				 id: "13",
			 				 title: "现在的编程和二十年前有什么不同？"
			 },
			 {
			 				 id: "14",
			 				 title: "命令行版的斗地主你玩过没？"
			 },
			 {
			 				 id: "15",
			 				 title: "学习String相关知识点的一些总结"
			 },
			 {
				 id: "16",
				 title: "面试BAT时,他们问了我这些!"
			 }
		]
		, youLikeData: [
			{
				TextId : "1",
				categoryId : "1",
				title : "小小TODO标识，你用对了吗？",
				content : "有时，您需要标记部分代码以供将来参考，比如: 优化，改进，可能的更改，要讨论的问题等。 通常我们会在代码中加入如下的标记表示待办",
				author : "3117004268",
				name: "黄展乐",
				readAccount : "5",
				replyAccount : "55",
				like: "655",
				unlike: "2",
				time: "2020-02-15",
				src: "../public/images/绿水.jpeg"
			},
			{
				TextId : 2,
				categoryId : 2,
				title : "下一站",
				content : "我是 扬帆向海，这个昵称来源于我的名字以及女朋友的名字。我热爱技术、热爱开源、热爱编程。技术是开源的、知识是共享的。写博客是对自己学习的一点点总结及记录，如果您对 Java、算法 感兴趣，可以关注我的动态，我们一起学习。",
				author : "3117004268",
				name: "李康远",
				readAccount : 5,
				replyAccount : 55,
				like: 655,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/绿水.jpeg"
			},
			{
				TextId : 3,
				categoryId : 1,
				title : "作为程序员，你真的刻意练习了吗",
				content : "刻意练习真的很重要，作为一名程序员，在读完这本书之后，也听了有关这本书的一些解读",
				author : "3117004268",
				name: "邝杰超",
				readAccount : 5,
				replyAccount : 55,
				like: 655,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/绿水.jpeg"
			},
			{
				TextId : 4,
				categoryId : 1,
				title : "访问一个网站会经历哪些流程",
				content : "通过wireshark分析访问一个网址会经历哪些流程，访问一个网站需要哪些步骤。",
				author : "3117004268",
				name: "焦广涛",
				readAccount : 5,
				replyAccount : 55,
				like: 655,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/绿水.jpeg"
			},
			{
				TextId : 5,
				categoryId : 1,
				title : "生活总是要继续",
				content : "出去浪了一个礼拜，调整心情，期间卸载微博两次，继续滚回来上班。当然，我上班也没啥蛋事，刷刷LG杯直播，下下棋而已。也恭喜一下韩国00后棋手申真谞终于在20岁生日之前拿到了第一个世界冠军，长江后浪推前浪，柯洁童鞋的时代，还能不能持续？",
				author : "3117004268",
				name: "李教授",
				readAccount : 5,
				replyAccount : 55,
				like: 655,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/绿水.jpeg"
			},
			{
				TextId : 6,
				categoryId : 1,
				title : "终于有人把口罩说清楚了。",
				content : "自1897年德国医师费吕格(FluggeC)用实验证明,向创口讲话能造成创口感染;同年,奥地利医师米库利兹-拉德凯(Mikulic z-Readeki  J)倡议手术者用口罩将口鼻遮住,以减少外科手术的感染,口罩的历史已有百余年了,但是直至1920年以后,口罩才在相关行业中推广使用。",
				author : "3117004268",
				name: "王大锤",
				readAccount : 5,
				replyAccount : 55,
				like: 655,
				unlike: 2,
				time: "2020-02-15",
				src: "../public/images/绿水.jpeg"
			}
		]
		, textTime: [
			{time:'2019-01'},
			{time:'2019-02'},
			{time:'2019-03'},
			{time:'2019-04'},
			{time:'2019-05'},
			{time:'2019-07'},
			{time:'2019-10'},
			{time:'2019-12'},
			{time:'2020-01'}
		],
		goodUp: [
			{
				userId: '12312',
				name: '黄展乐'
			},
			{
				userId: '14124',
				name: '李康远'
			},
			{
				userId: '2432523',
				name: '邝杰超'
			},
			{
				userId: '346346',
				name: '焦广涛'
			},
			{
				userId: 'sfs3325',
				name: '西门吹'
			},
			{
				userId: 'sdf3525325',
				name: '饭锅'
			},
			{
				userId: 'sdf35225',
				name: '大鹏'
			}
		],
	},
	methods: {
		doSelfMessage() {
			if(!this.isLogin) {
				location.href = "login.html";
			} else {
				location.href = "selfPage.html"
			}
		},
		dateFormat(d) {  //转化日期未年月
			var date = new Date(d);
			var y = date.getFullYear();
			var m = date.getMonth()+1;
			return `${y}年${m}月`;
		},
		selectMenu(id) {
			location.href = 'textKind.html?' + id;	
		},
		scrollList(con, o, oChild){
			var oHeight = o.offsetHeight;//得到对象高度
			var oChildHeight = oChild.offsetHeight; //每个li的高度
			
			var contentHeight = con.offsetHeight; //容器的高度
			if(this.isTimer != null) return;
			this.liTimer = setInterval(function(){
				if(o.offsetTop <= contentHeight - oHeight ){
					o.style.top = 0 - oChildHeight + "px";
				}
				else{
					// o.style.top = o.offsetTop - oChildHeight + "px";
					dHMove(o, .6, 0, o.offsetTop-oChildHeight, 0);
				}
				
			}, 1500);
		},
		//动态列表悬停鼠标事件
		hoverList(){
			clearInterval(this.liTimer)
			this.liTimer = null;
			console.log("ssa")
		},
		leaveList(){
			this.scrollList(this.$refs.hot, this.$refs.list, this.$refs.list.children[0])
		},
		getTextForTime(i) {
			var time = this.textTime[i].time;
			console.log(time);
			location.href = 'texts.html?' + time;
		},
		getTextById(id) {
			location.href = 'text.html?' + id;
		},
		lookUserMessage(userId) {
			location.href = 'lookUser.html?' + userId;
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
	},
	mounted() {
		this.scrollList(this.$refs.hot, this.$refs.list, this.$refs.list.children[0])
		// var res = this.getReq('getTextCommend' {  //列表
		// 	pageSize: 20,
		// 	pageNum: 1
		// })
		// this.scrollListData = res.data;
		// var res = this.getReq('getTextCommend' {  //左边
		// 	pageSize: 10,
			// pageNum: this.curPage
		// })
		// this.curPage++;
		// this.texts = res.data;
		// var res = this.getReq('getTextCommend' {  //猜你喜欢
		// 	pageSize: 10,
		// 	pageNum: 1
		// })
		// this.youLikeData = res.data;
		// var res = this.getReq('getBackTime' {  //归档时间
		// 	pageSize: 10,
		// 	pageNum: 1
		// })
		// this.textTime = res.data;
		// var res = this.getReq('getUp' {  //优秀up
		// })
		// this.goodUp = res.data;
	}
})


