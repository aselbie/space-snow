var BuildingEntryView = Backbone.View.extend({
	tagName: 'span',
	
  template: _.template(' <div class="building" id ="<%= name %>"></div>'),
	
	events: {
		'click': function(){
      
      this.model.addToBoard();
		}
	},
	
	render: function(){
    return this.$el.html(this.template(this.model.attributes));
    // return $('.build').append(this.template(this.model.attributes));
	}
});