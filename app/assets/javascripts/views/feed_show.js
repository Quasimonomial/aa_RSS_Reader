NewsReader.Views.FeedShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST["feedShow"],
  
  events: { "click button#refresh": "refresh" },

  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  },
  
  refresh: function(event) {
    // debugger
    console.log("refreshing");
    var id = $(event.currentTarget).data('id');
    this.model.collection.getOrFetch(id);
  }
});