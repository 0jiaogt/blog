

var register = new Vue({
	el: '#register',
	data: {
		ruleForm: {
		  pass: '',
		  checkPass: ''
		}
	},
	methods: {
		resetForm(name) {
			this.$ref.name.reset();
		}
	}
})