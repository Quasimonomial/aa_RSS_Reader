NewsReader.Views.FeedIndex = Backbone.View.extend({
  template: JST["feedIndex"],

  render: function(){
    console.log("rendering Feed view");
    var content = this.template({feed: this.collection});
    this.$el.html(content);
    return this
  }


});