define([
		'jquery', 'backbone',
		'./header.view.js',
		'./home.view.js',
		'./score.list.view.js',
		'./score.analysis.view.js',
		'./footer.view.js'
	], 
	function($, Backbone, HeaderView, HomeView, ScoreListView, ScoreAnalysisView, FooterView) {
	module.exports = Backbone.View.extend({
		el: $("body"),
		initialize: function() {
			this.$header = this.$('.header');
			this.$footer = this.$('.footer');
			this.$content = this.$('.content');	

			this.on('showLoading', this.showLoading);
			this.on('hideLoading', this.hideLoading);
		},

		render: function() {
			//当有异步请求的时候显示全局的loading画面
			this.$header.html(new HeaderView().el);
			this.$content.html(new HomeView().el);
			this.$footer.html(new FooterView().el);
		},

		showLoading: function() {
			console.log('showLoading...');
		},

		hideLoading: function() {
			console.log('hideLoading...');
		}
	})
});