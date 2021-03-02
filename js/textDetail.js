
var textDetail = new Vue({
	el: '#textDetail',
	data: {
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
		textSearchData: [],   //推荐信息
		state: '',   //搜索框字符串
		timeout:  null,
		isLogin: true,  //登录状态
		makeCommend: '',  //评论内容
		isAttention: false, //是否关注了
		authorMsg: {
			userId: '4564',
			name: '风来了',
			grade: '6',
			integral: 6000,
			textCount: 544,     //文章量
			videoCount: 60,     //视频量
			comeCount: '9999+',   //访问量
			fansCount: 54,   //粉丝数量
			src: '../public/images/小星.jpg', //头像
		},
		newArticle: [
			{
				TextId : 1,
				categoryId : 1,
				title : '世界上有哪些代码量很少，但很牛逼很经典的算法或项目案例',
				content : 'adasdasd',
				author : '3414',
				name: '君麻吕',
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
				content : 'adasdasd',
				author : '3414',
				name: '君麻吕',
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
				content : 'adasdasd',
				author : '3414',
				name: '君麻吕',
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
				content : 'adasdasd',
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
				title : '我的第一篇博客',
				content : 'adasdasd',
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
				title : '未来 Android 开发的从业方向',
				content : 'adasdasd',
				author : '3414',
				name: '君麻吕',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			}
		],
		textBack: [   //该用户文章归档时间
			{
				time: '2020-03',
				textCount: 20,
				userId: '3451'
			},
			{
				time: '2020-02',
				textCount: 1,
				userId: '3451'
			},
			{
				time: '2020-01',
				textCount: 2,
				userId: '3451'
			},
			{
				time: '2019-12',
				textCount: 22,
				userId: '3451'
			},
			{
				time: '2019-11',
				textCount: 11,
				userId: '3451'
			},
		],
		textKind: [
			{
				categoryId : '1',
				name: 'C++',
				textCount: 12,
				userId: '3451'
			},
			{
				categoryId : '2',
				name: 'Java',
				textCount: 12,
				userId: '3451'
			},
			{
				categoryId : '3',
				name: '数据结构',
				textCount: 9,
				userId: '3451'
			},
			{
				categoryId : '4',
				name: '算法分析',
				textCount: 8,
				userId: '3451'
			}
		],
		activeNames: '1',   //折叠默认打开项
		commentData: [   //评论数据
			{
				commentId: "1",
				textId: "2",
				name : "小蜜蜂",
				userId: "4354",
				content: "赞一个",
				like: "22001",
				time: "2020-01-01 11:00:00",
				src: "../public/images/baiyun.jpg",
				children: [
					{
						replyId: "1",
						commentId: "1",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "对的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/head.jpg",
					},
					{
						replyId: "2",
						commentId: "1",
						userId: "2465",
						name : "西门庆",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/小星.jpg",
					},
					{
						replyId: "3",
						commentId: "1",
						userId: "2465",
						name : "刘易斯",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/list1.jpg",
					},
					{
						replyId: "4",
						commentId: "1",
						userId: "2465",
						name : "实习生小王",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/list2.jpg",
					},
					{
						replyId: "5",
						commentId: "1",
						userId: "2465",
						name : "志军",
						beReplyId: '3415',
						beReplyName: '小蜜蜂',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/list3.jpg",
					}
				]
			},
			{
				commentId: "2",
				textId: "2",
				name : "实习生小李",
				userId: "4354",
				content: "这篇文章是好文",
				like: "200",
				time: "2020-01-01 11:00:00",
				src: "../public/images/baiyun.jpg",
				children: [
					{
						replyId: "1",
						commentId: "2",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '实习生小李',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					},
					{
						replyId: "2",
						commentId: "2",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '实习生小李',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					},
					{
						replyId: "3",
						commentId: "2",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '实习生小李',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					},
					{
						replyId: "4",
						commentId: "2",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '实习生小李',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					},
					{
						replyId: "5",
						commentId: "2",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '实习生小李',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					}
				]
			},
			{
				commentId: "3",
				textId: "2",
				name : "刘教授",
				userId: "4354",
				content: "分析的不错",
				like: "200",
				time: "2020-01-01 11:00:00",
				src: "../public/images/baiyun.jpg",
				children: [
					{
						replyId: "1",
						commentId: "3",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					},
					{
						replyId: "2",
						commentId: "3",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					},
					{
						replyId: "3",
						commentId: "3",
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
						commentId: "3",
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
						commentId: "3",
						userId: "2465",
						name : "大飞机",
						beReplyId: '3415',
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					}
				]
			},
			{
				commentId: "4",
				textId: "2",
				name : "阿达瓦",
				userId: "4354",
				content: "已分享",
				like: "200",
				time: "2020-01-01 11:00:00",
				src: "../public/images/baiyun.jpg",
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
						src: "../public/images/baiyun.jpg",
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
						src: "../public/images/baiyun.jpg",
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
						src: "../public/images/baiyun.jpg",
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
						src: "../public/images/baiyun.jpg",
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
						src: "../public/images/baiyun.jpg",
					}
				]
			},
			{
				commentId: "5",
				textId: "2",
				name : "王大锤",
				userId: "4354",
				content: "太棒了这个",
				like: "200",
				time: "2020-01-01 11:00:00",
				src: "../public/images/baiyun.jpg",
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
						src: "../public/images/baiyun.jpg",
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
						src: "../public/images/baiyun.jpg",
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
		dialogReplyVisible: false,   //回复对话框状态
		makeReply: '',   //回复内容
		bottomCommend: [
			{
				TextId : 1,
				categoryId : 1,
				title : '面试BAT时,他们问了我这些!',
				content : '经典面试题',
				author : '3414',
				name: '王大锤',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 2,
				categoryId : 1,
				title : '小小TODO标识，你用对了吗？',
				content : '有时，您需要标记部分代码以供将来参考，比如: 优化，改进，可能的更改，要讨论的问题等',
				author : '3414',
				name: '君麻吕',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 3,
				categoryId : 1,
				title : '下一站',
				content : '我是 扬帆向海，这个昵称来源于我的名字以及女朋友的名字。',
				author : '3414',
				name: '西门教授',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 4,
				categoryId : 1,
				title : '作为程序员，你真的刻意练习了吗',
				content : '刻意练习真的很重要，作为一名程序员，在读完这本书之后，也听了有关这本书的一些解读',
				author : '3414',
				name: '程序员滔',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 5,
				categoryId : 1,
				title : '访问一个网站会经历哪些流程',
				content : '通过wireshark分析访问一个网址会经历哪些流程，访问一个网站需要哪些步骤。',
				author : '3414',
				name: '清风',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			},
			{
				TextId : 6,
				categoryId : 1,
				title : '生活总是要继续',
				content : '出去浪了一个礼拜，调整心情，期间卸载微博两次，继续滚回来上班。当然，我上班也没啥蛋事，刷刷LG杯直播，下下棋而已。',
				author : '3414',
				name: '凤箫逸',
				readAccount : '999',
				replyAccount : '88',
				like : '999',
				unlike : '2',
				time : '2020-01-02 12:01:00'					
			}
		],
		loading: false,   //加载底部推荐
	},
	methods: {
		handleKindSelect(id) {
			location.href = "text.html?categoryId=" + id;
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
		querySearchAsync(queryString, cb) {   //搜索
			var textSearchData = this.textSearchData;
			var results = queryString ? textSearchData.filter(this.createStateFilter(queryString)) : textSearchData;
		
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
				console.log(item); 
		},
		handleSearch() {   //点击查询按钮
			console.log("查询按钮点击")
		},
		getPersonMSG(beLikedId) { //查看某人信息，被查看人id
			console.log("查看某人信息");
		},
		attentionPerson(id) { //关注某人，被关注人id
			console.log("关注某人")
		},
		toDate(d){  //日期转化
			return dateFormat(d);
		},
		getAllBackTime(event) {  //获取全部归档时间
			console.log('获取全部归档时间')
			event.target.style.display = "none"; 
		},
		getMonthText(d, userId) {   //获取某用户该月文章
			console.log(d, userId)
		},
		getKindText(id, userId) {  //获取某人的某类文章
			console.log(id, userId);
		},
		getMoreKind(event) {  //获取更多的分类
			console.log("获取全部分类")
			event.target.style.display = "none"; 
		},
		 handleChange(val) {  //折叠面板
			console.log(val);
		 },
		goToPersonInfo(UserId) {  //查看某人的个人信息
			console.log("个人资料")
		},
		doReply(commentId, beReplyId) {   //点击评论,评论的id，被评论人id
			this.dialogReplyVisible = true;
			console.log(commentId, beReplyId);
			this.curCommentId = commentId;
			this.curUserId = beReplyId;
		},
		sendReply() {   //发送评论
			this.dialogReplyVisible = false;
			
			if(this.makeReply === '') {
				this.$message({
				  message: '警告哦，这是一条警告消息',
				  type: 'warning'
				});
			} else {
				console.log(this.makeReply);
				this.makeReply = '';
			}
		},
		cancleReply() {  //取消评论
			this.dialogReplyVisible = false; 
			this.makeReply = '';
		},
		loadMoreBottom() {     //加载更多底部推荐
			this.loading = true
			setTimeout(() => {
			  this.bottomCommend = [...this.bottomCommend, ...this.bottomCommend]
			  this.loading = false
			}, 2000)
		}, 
		goToTextDetail(textId) {  //查看文章，文章id
			console.log("查看文章");
			location.href = "textDetail.html?" + textId;
		},
		sendCommend() {  //发送评论
			if(this.makeCommend === '') {
				this.$message({
				  showClose: true,
				  message: '内容为空，请输入内容！',
				  type: 'error'
				});
			} else {
				console.log(this.makeCommend)
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
		this.textSearchData = this.loadAll(); 
		var searchObj = this.getSearchStr();
		if(searchObj != null) {
			if(searchObj.pos) {
				console.log(searchObj.pos)
				location.hash = "#" + searchObj.pos;
			}
		}
		// var res = this.getReq('getTextById', {  //获取文章数据
		// 	textId: searchObj['textId']
		// })
		// this.text = res.data;
		// var res = this.getReq('getTextById', {  //获取作者数据
		// 	textId: searchObj['textId']
		// })
		// this.text = res.data;
		// var res = this.getReq('getTextById', {  //获取最新发布
		// 	textId: searchObj['textId']
		// })
		// this.text = res.data;
		// var res = this.getReq('getTextById', {  //获取分类
		// 	textId: searchObj['textId']
		// })
		// this.text = res.data;
		// var res = this.getReq('getTextById', {  //获取文章归档
		// 	textId: searchObj['textId']
		// })
		// this.text = res.data;
		// var res = this.getReq('getTextById', {  //获取评论
		// 	textId: searchObj['textId']
		// })
		// this.text = res.data;
		// var res = this.getReq('getTextById', {  //获取相关推荐
		// 	textId: searchObj['textId']
		// })
		// this.text = res.data;
	},
	computed: {
	  noMore () {
		return this.bottomCommend.length >= 40
	  },
	  disabled () {
		return this.loading || this.noMore
	  }
	}
})