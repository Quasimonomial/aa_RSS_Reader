NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = $(options.rootEl);
  },

  routes: {
    "": "index"
  },

  index: function(){
    var feeds = NewsReader.Collections.feeds;
    feeds.fetch();
    var indexView = new NewsReader.Views.FeedIndex({
      collection: feeds
    });

    indexView.render();
    this.$rootEl.html(indexView.$el)
  }


})