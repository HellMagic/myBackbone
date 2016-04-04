/*
设计：复杂的view可以通过分解成多个小的view来处理；这样每一个小view对应的model模型也就简单了，而不用因为view复杂而需要匹配复杂的model，应该向“简单”靠拢，而不是向“复杂”妥协。
*/

/*
view需要异步数据的填充的思路：
1.在初始化中使用reset
initialize: function(){
	this.collection = new MitarbeiterCollection;
	this.collection.fetch();//colletcion.fetch执行完毕后会触发reset事件，又因为下面对rest事件做了监听，所以会再次触发render函数
	var newtemplate = MitarbeiterTemplate;
	this.template = _.template($(newtemplate).html());
	this.collection.on('reset', this.render, this);
}
但是reset可能会有局限--比如update的时候是否会被触发呢？为了保证触发，通用的解决方式：this.listenTo( this.collection, 'reset add change remove', this.render, this );

2.在render中将异步置为false
render: function () {
    var source = $('#my-list-template').html();
    var template = Handlebars.compile(source);
    var collection = new MyCollection;
    collection.fetch({async:false});//render中将异步置为同步，所以一直会等到拿到数据，然后渲染的时候就是有数据的
    var html = template(collection.toJSON());
    $(this.el).html(html);
});

3.也是在render中重绘，但是不是阻塞式的同步
var MitarbeiterListView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      this.collection = new MitarbeiterCollection;

      var newtemplate = MitarbeiterTemplate;
      this.template = _.template($(newtemplate).html());
    },
    render: function(){
      var self = this;

      // show some loading message
      this.$el.html('Loading');

      // fetch, when that is done, replace 'Loading' with content
      this.collection.fetch().done(function(){ //类似第二种方法，只不过这里不阻塞，可以在异步获取数据的时候view可以展现其他的东西，比如loading
          var renderedContent = self.template(self.collection.toJSON());
          self.$el.html(renderedContent);
      });
      return this;
    }
 });

*/


define(['backbone', 'lodash'], function(Backbone, _) {
	
});