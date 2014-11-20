window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Routers.Router({rootEl: "#feedContent"});

    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
