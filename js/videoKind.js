
var videoKind = new Vue({
	el: '#videoKind',
	data: {
		videoKind: [   //视频分类
			{
				id: '1',
				name: 'java',
				total: '88',
				children: []
			},
			{
				id: '2',
				name: 'python',
				total: '88',
				children: []
			},
			{
				id: '3',
				name: 'C++',
				total: '999+',
				children: []
			},
			{
				id: '4',
				name: '人工智能',
				total: '88',
				children: []
			},
			{
				id: '5',
				name: '神经网络',
				total: '88',
				children: []
			},
			{
				id: '6',
				name: '大数据',
				total: '88',
				children: []
			},
			{
				id: '7',
				name: 'HTML',
				total: '88',
				children: []
			},
		],
		searchStr: '',  
		restaurants: [],   //推荐信息
		state: '',   //搜索框字符串
		timeout:  null,
		hotCommend: [
			{
				id: '1',
				categoryId: '1',
				category: 'Java',
				title: '如何高效学习机器学，让你更快进入这个世界！',
				src: '../public/images/list1.jpg'
			},
			{
				id: '2',
				categoryId: '1',
				category: 'python',
				title: 'Java实现 蓝桥杯 历届试题 斐波那契',
				src: '../public/images/list2.jpg'
			},
			{
				id: '3',
				categoryId: '1',
				category: 'C++',
				title: ' Spring中Bean的讲解',
				src: '../public/images/list3.jpg'
			},
			{
				id: '4',
				categoryId: '1',
				category: '人工智能',
				title: ' UDP程序设计基础',
				src: '../public/images/list4.jpg'
			},
			{
				id: '5',
				categoryId: '1',
				category: '神经网络',
				title: '实现Redis分布式锁',
				src: '../public/images/list5.jpg'
			},
			{
				id: '6',
				categoryId: '1',
				category: '大数据',
				title: '2020美团后台开发实习岗笔试题目',
				src: '../public/images/list6.jpg'
			},
			{
				id: '7',
				categoryId: '1',
				category: '大数据',
				title: 'JAVA-Collection集合！',
				src: '../public/images/list7.jpg'
			},
			{
				id: '8',
				categoryId: '1',
				category: '大数据',
				title: 'OpenOPC Python 与PLC 交互',
				src: '../public/images/list8.jpg'
			},
			{
				id: '9',
				categoryId: '1',
				category: '大数据',
				title: 'Flask基础快速上手',
				src: '../public/images/list9.jpg'
			}
		],
		scrollLoadFlag: [],  //滚动加载标记
		rightMenu: [],    //右边菜单
	},
	 methods: {
		async handleKindSelect(id) {  //选择分类
			 location.href = "videoList.html?categoryId=" + id;
		 },
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
		  querySearchAsync(queryString, cb) {   //模糊搜索
		  // restaurants = this.getReq('server/my_server.js', {})
			console.log("查询")
			var restaurants = this.restaurants;
			var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
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
			// this.restaurants = this.getReq('getVideoById', {
			// 	videoId: videoId
			// })
		  },
		  handleSearch() {   //点击查询按钮
			  console.log("查询按钮点击")
			  if(this.state != '') {
				  location.href = "videoList.html?searchStr=" + this.state;
			  } else {
				  this.$message({
					message: '内容为空，请输入查询内容！',
					type: 'warning'
				  });
			  }
		  },
		  watchMore(index) {  //查看更多，更具类型1,2
			  console.log("查看更多", index)
			  if(index === 0) {
				  location.href = 'videoList.html?hot='+ 0;
			  } else {
				  location.href = 'videoList.html?categoryId=' + this.videoKind[index-1].id;
			  }
		  },
		  scroll(event) {  //检测滚动条位置
			 if(document.body.scrollTop+document.documentElement.scrollTop>100) {
				 this.$refs.rightMenu.style.top = 80 + "px";
			 } else {
				 this.$refs.rightMenu.style.top = 280 + "px";
				 console.log(this.$refs.rightMenu.children[0].children)  //拿到 li
			 }
			 if(document.body.scrollTop+document.documentElement.scrollTop >= 600 && document.body.scrollTop+document.documentElement.scrollTop< 1200 ){
				 if(this.scrollLoadFlag[0] === false) {
					 this.scrollLoadFlag[0] = true;
					this.videoKind[0].children =  this.getReq('getVideoByCategory', {
						categoryId: this.videoKind[0].categoryId,
						pageSize: 10,
						pageNum: 1
					})
					
				 }
				 this.removeClassName(this.$refs.rightMenu.children[0].children, 'active');
				 this.$refs.rightMenu.children[0].children[0].classList.add('active');
			 } else if(document.body.scrollTop+document.documentElement.scrollTop >= 1200 && document.body.scrollTop+document.documentElement.scrollTop< 1800){
				 if(this.scrollLoadFlag[1] === false) {
					 this.scrollLoadFlag[1] = true;
					 this.videoKind[1].children =  this.getReq('getVideoByCategory', {
					 	categoryId: this.videoKind[1].categoryId,
					 	pageSize: 10,
					 	pageNum: 1
					 })
				 }
				 this.removeClassName(this.$refs.rightMenu.children[0].children, 'active');
				 this.$refs.rightMenu.children[0].children[1].classList.add('active');
			 }  else if(document.body.scrollTop+document.documentElement.scrollTop >= 1800 && document.body.scrollTop+document.documentElement.scrollTop< 2400){
				 if(this.scrollLoadFlag[2] === false) {
					 this.scrollLoadFlag[2] = true;
					 this.videoKind[2].children =  this.getReq('getVideoByCategory', {
					 	categoryId: this.videoKind[2].categoryId,
					 	pageSize: 10,
					 	pageNum: 1
					 })
				 }
				 this.removeClassName(this.$refs.rightMenu.children[0].children, 'active');
				 this.$refs.rightMenu.children[0].children[2].classList.add('active');
			 } else if(document.body.scrollTop+document.documentElement.scrollTop >= 2400 && document.body.scrollTop+document.documentElement.scrollTop< 2900){
				 if(this.scrollLoadFlag[3] === false) {
					 this.scrollLoadFlag[3] = true;
					this.videoKind[3].children =  this.getReq('getVideoByCategory', {
						categoryId: this.videoKind[3].categoryId,
						pageSize: 10,
						pageNum: 1
					})
				 }
				 this.removeClassName(this.$refs.rightMenu.children[0].children, 'active');
				 this.$refs.rightMenu.children[0].children[3].classList.add('active');
			 } else if(document.body.scrollTop+document.documentElement.scrollTop >= 2900 && document.body.scrollTop+document.documentElement.scrollTop< 3500){
				 if(this.scrollLoadFlag[4] === false) {
					 this.scrollLoadFlag[4] = true;
					 this.videoKind[4].children =  this.getReq('getVideoByCategory', {
					 	categoryId: this.videoKind[4].categoryId,
					 	pageSize: 10,
					 	pageNum: 1
					 })
				 }
				 this.removeClassName(this.$refs.rightMenu.children[0].children, 'active');
				 this.$refs.rightMenu.children[0].children[4].classList.add('active');
			 } else if(document.body.scrollTop+document.documentElement.scrollTop >= 3500 && document.body.scrollTop+document.documentElement.scrollTop< 3800){
				 if(this.scrollLoadFlag[5] === false) {
					 this.scrollLoadFlag[5] = true;
					this.videoKind[5].children =  this.getReq('getVideoByCategory', {
						categoryId: this.videoKind[5].categoryId,
						pageSize: 10,
						pageNum: 1
					})
				 }
				 this.removeClassName(this.$refs.rightMenu.children[0].children, 'active');
				 this.$refs.rightMenu.children[0].children[5].classList.add('active');
			 }else if(document.body.scrollTop+document.documentElement.scrollTop >= 3900){
				 if(this.scrollLoadFlag[6] === false) {
					 this.scrollLoadFlag[6] = true;
					 this.videoKind[6].children =  this.getReq('getVideoByCategory', {
					 	categoryId: this.videoKind[6].categoryId,
					 	pageSize: 10,
					 	pageNum: 1
					 })
				 }
				 this.removeClassName(this.$refs.rightMenu.children[0].children, 'active');
				 this.$refs.rightMenu.children[0].children[6].classList.add('active');
			 } else {
				 this.removeClassName(this.$refs.rightMenu.children[0].children, 'active');
			 }
		  
		  },
		  removeClassName(o, name) {
			  for(var i = 0; i<o.length; i++) {
				 if(o[i].classList.contains(name)) {
					 o[i].classList.remove(name)
				 }
			  }
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
		  moveScrollTo(index) {  //点击右侧菜单， 移动滚动条
			  switch(index) {
					case 0:	document.body.scrollTo(document.body.scrollLeft, 600)
					 document.documentElement.scrollTo(document.documentElement.scrollLeft, 600)
						break;
					case 1: document.body.scrollTo(document.body.scrollLeft, 1200)
					 document.documentElement.scrollTo(document.documentElement.scrollLeft, 1200)
						break;
					case 2: document.body.scrollTo(document.body.scrollLeft, 1800)
					 document.documentElement.scrollTo(document.documentElement.scrollLeft, 1800)
						break;
					case 3: document.body.scrollTo(document.body.scrollLeft, 2400)
					 document.documentElement.scrollTo(document.documentElement.scrollLeft, 2400)
						break;
					case 4: document.body.scrollTo(document.body.scrollLeft, 2900)
					 document.documentElement.scrollTo(document.documentElement.scrollLeft, 2900)
						break;
					case 5: document.body.scrollTo(document.body.scrollLeft, 3500)
					 document.documentElement.scrollTo(document.documentElement.scrollLeft, 3500)
						break;
					case 6: document.body.scrollTo(document.body.scrollLeft, 4000)
					 document.documentElement.scrollTo(document.documentElement.scrollLeft, 4000)
						break;
			  }
		  }
		},
	  watch: {   
		state() {   //检测搜索框值得变化
			 if(this.state === '') {
				 this.restaurants = []
			 }
			 if(this.restaurants === []) {
				this.restaurants =  this.getReq('searchStr', {
					searchStr: this.state
				}) 
			 }
		  }
	  },
	  async mounted() {
		// this.videoKind = this.getReq('getHotVideo', {}) //分类
		   // this.hotCommend =  this.getReq('getHotVideo', {
			  //  pageSize: 10,
			  //  pageNum: 1
		   // })  //热门
		  // console.log(data)
			window.addEventListener('scroll', this.scroll);
			for(var i = 0; i<this.videoKind.length; i++) {
				this.scrollLoadFlag[i] = false;
			}
		    this.restaurants = this.loadAll();
	  }
})