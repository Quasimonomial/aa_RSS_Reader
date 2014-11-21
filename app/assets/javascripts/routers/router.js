NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = $(options.rootEl);
  },

  routes: {
    "": "index",
    "feeds/:id": "show"
  },

  index: function(){
    var feeds = NewsReader.Collections.feeds;
    feeds.fetch();
    var indexView = new NewsReader.Views.FeedIndex({
      collection: feeds
    });

    this.$rootEl.html(indexView.render().$el);
  },

  show: function(id) {
    // var feed = new NewsReader.Models.Feed({id: id});
    var feed = NewsReader.Collections.feeds.getOrFetch(id);
    
    var showView = new NewsReader.Views.FeedShow({
      model: feed
    });
    
    this.$rootEl.html(showView.render().$el);
  }
})