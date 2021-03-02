
var text = new Vue({
	el: '#text',
	data: {
		isLogin: false,   //登录状态
		textSearchData: [],   //推荐信息
		state: '',   //搜索框字符串
		loading: false,  //加载状态
		loadTotal: 1000,  //加载总数
		stopFlag: false,  //停止加载状态
		timeout:  null,
		kindData: [
			{
				id: '1',
				name: 'c++'
			},
			{
				id: '2',
				name: 'Java'
			},
			{
				id: '3',
				name: '机器学习'
			},
			{
				id: '4',
				name: 'Go'
			}
		],
		textData: [
			{
				TextId : 1,
				categoryId : 1,
				title : '作为程序员，你真的刻意练习了吗',
				content : '刻意练习真的很重要，作为一名程序员，在读完这本书之后，也听了有关这本书的一些解读',
				author : '3414',
				name: '君麻吕',
				readAccount : '235',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 2,
				categoryId : 1,
				title : '访问一个网站会经历哪些流程',
				content : '通过wireshark分析访问一个网址会经历哪些流程，访问一个网站需要哪些步骤。',
				author : '3414',
				name: '君麻吕',
				readAccount : '995',
				replyAccount : '68',
				like : '499',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 3,
				categoryId : 1,
				title : '生活总是要继续',
				content : '出去浪了一个礼拜，调整心情，期间卸载微博两次，继续滚回来上班。当然，我上班也没啥蛋事，刷刷LG杯直播，下下棋而已。',
				author : '3414',
				name: '君麻吕',
				readAccount : '992',
				replyAccount : '48',
				like : '934',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 4,
				categoryId : 1,
				title : '终于有人把口罩说清楚了。',
				content : '自1897年德国医师费吕格(FluggeC)用实验证明,向创口讲话能造成创口感染;同年,奥地利医师米库利兹-拉德凯(Mikulic z-Readeki  J)倡议手术者用口罩将口鼻遮住,以减少外科手术的感染,口罩的历史已有百余年了,但是直至1920年以后,口罩才在相关行业中推广使用。',
				author : '3414',
				name: '君麻吕',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 5,
				categoryId : 1,
				title : '小小TODO标识，你用对了吗？',
				content : '有时，您需要标记部分代码以供将来参考，比如: 优化，改进，可能的更改，要讨论的问题等。 通常我们会在代码中加入如下的标记表示待办',
				author : '3414',
				name: '君麻吕',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 6,
				categoryId : 1,
				title : '下一站',
				content : '我是 扬帆向海，这个昵称来源于我的名字以及女朋友的名字。我热爱技术、热爱开源、热爱编程。技术是开源的、知识是共享的。写博客是对自己学习的一点点总结及记录，如果您对 Java、算法 感兴趣，可以关注我的动态，我们一起学习。',
				author : '3414',
				name: '君麻吕',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			}
		],
		hotCommend: [
			{
				TextId : 1,
				categoryId : 1,
				title : '世界上有哪些代码量很少，但很牛逼很经典的算法或项目案例？',
				content : '一个GitHub上的项目，目前标星34k。它的牛逼之处在于它基于轻量级跨平台全自动不可描述工具，采用了不可描述的高级语言语法，不用写一行代码，即可部署运行，提供检测、编译、打包、安装、运行一条龙服务，安全可靠。',
				author : '3414',
				name: '黄展乐',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 2,
				categoryId : 1,
				title : '推荐一个有趣的在线编程游戏',
				content : 'Code Combat是一款学习编程的角色扮演游戏。每一关都用任务的形式设立目标，用实时的反馈及时纠正代码的错误，用游戏的语言来呈现编程的用处。',
				author : '3414',
				name: '李康远',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 3,
				categoryId : 1,
				title : '遗传算法',
				content : '遗传算法是计算数学中用于解决最优化的搜索算法，是进化算法的一种。进化算法最初是借鉴了进化生物学中的一些现象而发展起来的，这些现象包括遗传、突变、自然选择以及杂交等。其本质是一种高效、并行、全局搜索的方法，能在搜索过程中自动获取和积累有关搜索空间的知识，并自适应地控制搜索过程以求得最佳解。',
				author : '3414',
				name: '邝杰超',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 4,
				categoryId : 1,
				title : '阿里巴巴向全社会开放黑科技：“泡在水里”的服务器',
				content : '为了让数据中心更绿色，阿里工程曾将服务器“泡在水里”进行散热，节能超70%，今天这项黑科技的神秘面纱被揭开。为了让数据中心更绿色，阿里工程曾将服务器“泡在水里”进行散热，节能超70%，今天这项黑科技的神秘面纱被揭开。',
				author : '3414',
				name: '焦广涛',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
		],
		
	},
	methods: {
		loadAll() {
		  return [
		    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
		    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
		    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
		    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
		    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
		    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
		    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
		    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
		    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
		    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
		    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
		    { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
		    { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
		    { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
		    { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
		    { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
		    { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
		    { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
		    { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
		    { "value": "枪会山", "address": "上海市普陀区棕榈路" },
		    { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
		    { "value": "钱记", "address": "上海市长宁区天山西路" },
		    { "value": "壹杯加", "address": "上海市长宁区通协路" },
		    { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
		    { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
		    { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
		    { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
		    { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
		    { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
		    { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
		    { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
		    { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
		    { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
		    { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
		    { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
		    { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
		    { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
		    { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
		    { "value": "浏阳蒸菜", "address": "天山西路430号" },
		    { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
		    { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
		    { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
		    { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
		    { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
		    { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
		    { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
		    { "value": "阳阳麻辣烫", "address": "天山西路389号" },
		    { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
		  ];
		},
		querySearchAsync(queryString, cb) {   //搜索
			var videoSearchData = this.videoSearchData;
			var results = queryString ? videoSearchData.filter(this.createStateFilter(queryString)) : videoSearchData;
		
			clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {
			  cb(results);
			}, 1000 * Math.random());
		},
		createStateFilter(queryString) {  //匹配字符串
			return (state) => {
			  return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
			};
		},
		load () {
			if(this.stopFlag === true){
			   this.loading = false;
			  return;
			}	 
			setTimeout(() => {
			this.textData = [...this.textData, ...this.textData]
			this.loading = false
			}, 2000)
			// if(this.curCategoryId === '') {  //滚动加载
			// 	var res = this.getReq('getTextCommend', {
			// 		pageSize: 10,
			// 		 pageNum: this.curPage
			// 	})
			// 	this.textData = res.data;
			// 	this.curPage++;
			// } else {
			// 	var res = this.getReq('getTextByCategoryId', {
			// 		categoryId: this.curCategoryId,
			// 		pageSize: 10,
			// 		pageNum: this.curPage
			// 	})
			// 	this.textData = res.data;
			// 	this.curPage++;
			// }
			
		  },
		  scorllEvent(event) {  //鼠标滚动事件
			 if(document.body.offsetHeight - (document.body.scrollTop+document.documentElement.scrollTop+document.documentElement.clientHeight) <= 100) {
				if(this.loading === true){
					return;
				}
				this.loading = true;
				this.load();
			 }
		  },
		handleSelect(item) {   //选择推荐的
			var res = this.getReq('getTextById', {
				textId: item.id
			})
			this.textData = res.data;	 
		},
		handleSearch() {   //点击查询按钮
			if(this.state === '') {
				this.$message({
				  showClose: true,
				  message: '内容为空，请输入内容！',
				  type: 'error'
				});
			}
			var res = this.getReq('textSearchStr', {
				searchStr: this.state
			})
			this.textData = res.data;
		},
		handleSelectKind(id) {   //选择分类后，发送请求
			console.log('选择某类')
			this.curCategoryId = id;
			this.curPage = 1;
			var el = this.$refs.topUl;
			for(var i = 0; i<el.children.length; i++) {
				if(el.children[i].classList.contains('active')) {
					el.children[i].classList.remove('active')
				}
			}
			event.target.classList.add('active')
			// var res = this.getReq('getTextByCategoryId', {  //获取推荐文章
			//	categoryId: id,
			// 	pageSize: 10,
			// 	pageNum: this.curPage
			// })
			//this.textData = res.data;
		},
		goToPersonInfo(userId) {  //查看某人的个人信息
			location.href = "personInfo.html?userId=" + userId;
		},
		goTotextDetail(textId) {  //文章详情
			location.href = "textDetail.html?textId=" + textId;
		},
		getTextById(textId) {  //去到页面得评论处
			location.href = "textDetail.html?textId=" + textId + '&pos=commend';
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
		
	},
	mounted() {
		this.videoSearchData = this.loadAll();
		document.getElementsByTagName('body')[0].addEventListener('mousewheel', this.scorllEvent);
		
		// var res = this.getReq('getTextCommend', {  //获取推荐文章
		// 	pageSize: 10,
		// 	pageNum: this.curPage
		// })
		// this.textData = res.data;
		// this.loadTotal = res.total;
		// var res = this.getReq('gethotText', {  //获取热门文章
		// 	pageSize: 10,
		// 	pageNum: 1
		// })
		// this.hotCommend = res.data;
		// var res = this.getReq('getyouLikeText', {  //获取猜你喜欢
		// 	pageSize: 10,
		// 	pageNum: 1
		// })
		// this.youLikeData = res.data;
	},
	 computed: {
	  noMore () {
		if(this.textData.length >= this.loadTotal) {
			this.stopFlag = true;
		}
		return this.textData.length >= this.loadTotal;
	  },
	  disabled () {
		return this.loading || this.noMore
	  }
	},
})