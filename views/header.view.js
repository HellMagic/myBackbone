define(['jquery', 'underscore', 'backbone', 'mustache', 'text!templates/header', 'lib/api'], function($, _, Backbone, Mustache, headerTemplate, api) {
	module.exports = Backbone.View.extend({
		el: $('.header'),

		initialize: function() {
			console.log('route header view');
			this.template = headerTemplate;
		},

		render: function() {
			var self = this;
			self.trigger('showLoading');

			api.fetchUser()
				.then(function(user) {
					self.trigger('hideLoading');
					self.$el.html(Mustache.to_html(self.template, user));//凡是不牵涉到任何变化的数据都不在单独建立Backbone.Model了，直接上json，也省的model.toJson()的转换了
				})
			;
			return this;
		}		
	})
});