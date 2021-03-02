
var issueDetail = new Vue({
	el: '#issueDetail',
	data: {
		activeNames: ['1'],   //默认打开的面板
		isLogin: true,  //登录状态
		dialogReplyVisible: false, //对话框状态
		makeReply: '',  //回复内容
		makeCommend: '',  //评论内容
		authorMsg: {
			userId: '4564',
			name: '小美',
			grade: '6',
			integral: 6000,
			textCount: 544,     //文章量
			videoCount: 60,     //视频量
			comeCount: '9999+',   //访问量
			fansCount: 54,   //粉丝数量
			src: '../public/images/list1.jpg', //头像
		},
		commentData: [   //评论数据
			{
				commentId: "1",
				textId: "2",
				name : "西门教授",
				userId: "4354",
				content: "将字符串转换成数字，得用到parseInt函数。",
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
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					},
					{
						replyId: "2",
						commentId: "1",
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
						commentId: "1",
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
						commentId: "1",
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
						commentId: "1",
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
				commentId: "2",
				textId: "2",
				name : "王大锤",
				userId: "4354",
				content: "parseInt，或者Number.parseInt(ES6)",
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
						beReplyName: '啊啥的',
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
						beReplyName: '啊啥的',
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
						beReplyName: '啊啥的',
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
						beReplyName: '啊啥的',
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
						beReplyName: '啊啥的',
						content: "阿松大数据阿拉斯加的",
						time: "2020-01-02 10:00:00",
						src: "../public/images/baiyun.jpg",
					}
				]
			},
			{
				commentId: "3",
				textId: "2",
				name : "程序员小李",
				userId: "4354",
				content: "大厦的撒娇好的就卡省的就卡省的就还是安居客的杀菌回到家喀什",
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
				name : "梅西",
				userId: "4354",
				content: "声望： 33使用parseInt（）函数",
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
				name : "大黄蜂",
				userId: "4354",
				content: "数字可以直接转字符串，字符串不能直接转数字会报错",
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
	},
	methods: {
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
	},
})