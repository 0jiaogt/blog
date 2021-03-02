
var upload = new Vue({
	el: '#upload',
	data: {
		activeName: 'first',  //选项卡默认项
		_src: '',   //图片临时路径
		imgArr: [], //图片数组
		fileList: [],  //上传视频
		videoProgress: 0,  //视频上传进度条
		dialogFormVisible: false,   //对话框状态
		textTitle: '',  //文章的标题
		textCategory: '',  //文章分类
		videoTitle: '',  //视频标题
		videoVategory: '',  //视频分类
		tabStatus: false,  // 选项卡选中的标识,false代表文章选中
		videoProgressStatus: false, //视频上传进度条状态
		categoryData: [
			{
				categoryId: '1',
				category: 'Java'
			},
			{
				categoryId: '2',
				category: 'C++'
			},
			{
				categoryId: '3',
				category: '数据结构'
			}
		]
	},
	methods: {
		handleClick(tab, event) {    //选中选项卡
			console.log(tab, event);
			tab.index == 1 ? this.tabStatus = true : this.tabStatus = false;
		},
		editShift() {
			markDown(this._src, this.imgArr);
		},
		changeFile() {
			changeFile(this.imgArr);
		},
		handleRemove(file, fileList) {
		   console.log(file, fileList);
		},
		handleExceed(files, fileList) {
			this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		},
		beforeRemove(file, fileList) {
			return this.$confirm(`确定移除 ${ file.name }？`);
		},
	   beforeAvatarUpload(file) {
		   var isVideo =  false;
		   switch(file.type) {
			   case 'video/MPEG4': 
					isVideo = true; break;
				case 'video/mp4':
					isVideo = true; break;
				case 'video/Ogg':
					isVideo = true; break;
				case 'video/WebM':
					isVideo = true; break;
		   }
		   this.videoProgressStatus = true;
		   if (!isVideo) {
			 this.$message.error('上传的视频只能是 MPEG4/Ogg.WebM 格式!');
		   }
		   return isVideo;
		 }, 
		 uploadVideo(params) {    //自定义上传 
			 console.log("asdasfkl",params.file)
			 
		 },
		 locationProgress(event, file, fileList) {
		 	console.log("进度", event, file, fileList)
			this.videoProgress = event.percent;
			console.log(this.videoProgress)
		 },
		 confirmUpload() {   //确认上传
			 console.log("确认上传");
		 },
		 dialogCancle() {    //对话框取消
			this.dialogFormVisible = false
			 console.log("对话框取消")
		 },
		 dialogConfirm() {  //对话框确认
			this.dialogFormVisible = false
			 console.log("对话框确认");
		 },
		 videoSuccess(response, file, fileList) {  //文件上传成功
			 consolelog("文件上传成功")		
		},
		videoError(err, file, fileList) {  //上传失败
			console.log("上传失败", err)
		}
	},
	mounted() {
			
	}
})