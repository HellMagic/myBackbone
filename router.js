define(['backbone'], function(Backbone) {
	module.exports = Backbone.Router.extend({
		routes: {
			"" : "home",
			"scoreList" : "scoreList",
			"scoreAnalysis" : "scoreAnalysis"
		},

		scoreList: function() {
			console.log('scoreList route');
			this.trigger('show-score-list');
		},

		scoreAnalysis: function() {
			console.log('scoreAnalysis route');
			this.trigger('show-score-analysis');
		}
	})
});