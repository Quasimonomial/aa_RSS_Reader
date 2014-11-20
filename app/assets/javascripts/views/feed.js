NewsReader.Views.FeedIndex = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render)
  },


  template: JST["feedIndex"],

  render: function() {
    console.log("rendering Feed view");
    var content = this.template({feeds: this.collection});
    this.$el.html(content);
    return this
  }
  


});