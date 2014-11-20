NewsReader.Views.FeedShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },


  template: JST["feedShow"],

  render: function () {
    console.log("rendering Feed Show View");
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  }
});