
//Vue instance binding the model and view together
var demo = new Vue({

	// DOM element on which to mount view model
	el: '#main',

	// The model
	data: {
		active: 'home',
		previous: 'just starting'
	},

	methods: {

		makeActive: function(item){
			this.previous = this.active;
			this.active = item;
		}
	}
});