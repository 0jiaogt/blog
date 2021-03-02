
var videoList = new Vue({
	el: '#videoList',
	data: {
		isLogin: false,   //登录状态
		videoSearchData: [],   //推荐信息
		state: '',   //搜索框字符串
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
		searchResult: [
			{
				id: '1',
				categoryId: '1',
				category: 'Java',
				title: 'Flask基础快速上手',
				src: '../public/images/list9.jpg'
			},
			{
				id: '2',
				categoryId: '1',
				category: 'Java',
				title: 'OpenOPC Python 与PLC 交互',
				src: '../public/images/list8.jpg'
			},
			{
				id: '3',
				categoryId: '1',
				category: 'Java',
				title: 'JAVA-Collection集合！',
				src: '../public/images/list7.jpg'
			},
			{
				id: '4',
				categoryId: '1',
				category: 'Java',
				title: '2020美团后台开发实习岗笔试题目',
				src: '../public/images/list6.jpg'
			},
			{
				id: '5',
				categoryId: '1',
				category: 'Java',
				title: '实现Redis分布式锁',
				src: '../public/images/list5.jpg'
			},
			{
				id: '6',
				categoryId: '1',
				category: 'Java',
				title: 'Spring中Bean的讲解',
				src: '../public/images/list4.jpg'
			}
		],
		commendList: [
			{
				TextId : "1",
				categoryId : "1",
				title : "如何高效学习机器学，让你更快进入这个世界！",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list9.jpg"
			},
			{
				TextId : "2",
				categoryId : "1",
				title : "Java实现 蓝桥杯 历届试题 斐波那契",
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
				TextId : "3",
				categoryId : "1",
				title : "Spring中Bean的讲解",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list3.jpg"
			},
			{
				TextId : "4",
				categoryId : "1",
				title : "UDP程序设计基础",
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
				TextId : "5",
				categoryId : "1",
				title : "实现Redis分布式锁",
				content : "sadjskadjlkas jdl撒旦吉萨考虑京东卡时间看大家思考大家奥克兰时间的离开洒家打开了就阿斯利康大家卢卡斯觉得绿卡就是领导看见",
				author : "124314",
				name: "君麻吕",
				readAccount : "50",
				replyAccount : 50,
				like : 50,
				unlike :1,
				time : "2020-12-12 15:00:00",
				src: "../public/images/list5.jpg"
			}
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
		handleSelect(item) {   //选择推荐的
				// this.searchResult = this.getReq('getVideoById', {
				// 		videoId: item.videoId
				// 	})
		},
		handleSearch() {   //点击查询按钮
			// this.searchResult = this.getReq('searchStr', {
			// 		searchStr: this.state
			// 	})
		},
		handleSelectKind(id) {   //选择分类后，发送请求
			// this.searchResult = this.getReq('getVideoByCategory', {
				//	categoryId: id,
			// 		pageSize: 10,
		// 			pageNum: 1
			// 	})
		},
		handleSelectVideo(id) {  //选择某个视频
			location.href = 'videoShow.html?videoId=' + id;
		},
		goToUserMSG(userId) {   //查看用户信息
			location.href = "personInfo.html?userId=" + userId;
		},
		goToVideo(id) {  //去到视频详情页
			location.href = 'videoShow.html?videoId=' + id;
		},
		getMore() {  //查看更多
			location.href="videoKind.html?more=0";
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
		}
	},
	mounted() {//初始加载先请求第一个页面数据
		// var searchObj = this.getSearchStr()
		// if(searchObj['searchStr'] != undefined) {  //获取地址参数
		// 	this.searchResult = this.getReq('searchStr', {
		// 		searchStr: searchObj['searchStr']
		// 	})
		// } else if(searchObj['hot'] != undefined) {  //查询热门
		// 	this.searchResult = this.getReq('getHotVideo', {
		// 		pageSize: 10,
		// 		pageNum: 1
		// 	})
		// } else if(searchObj['categoryId'] != undefined) {  //获取某类
		// 	this.searchResult = this.getReq('getHotVideo', {
		// 		categoryId: searchObj['category'],
		// 		pageSize: 10,
		// 		pageNum: 1
		// 	})
		// } else if(search['more'] != undefined) {   //获取更多推荐
			// this.searchResult = this.getReq('getCommendVideo', {
			// 		pageSize: 10,
			// 		pageNum: 1
			// 	})
		// }
		// this.commendList = this.getReq('getCommendVideo', {  //获取推荐信息
		// 		pageSize: 10,
		// 		pageNum: 1
		// 	})
		this.videoSearchData = this.loadAll(); 
	}
})