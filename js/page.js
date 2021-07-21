var TodoViewModel = function(data) {
    this.name = ko.observable(data.name);
    this.complete = ko.observable(data.complete);
};

var TodoListViewModel = function() {
    var self = this;
    this.todoItems = ko.observableArray();

    /*
    this.refresh = ko.command(function() {
        // make a call to the server
        return $.getJSON('/api/todos');  
    }).done(function() {
        var newItems = [];
        console.log(newItems);
        for (var i = 0; i < items.length; i++) {
            newItems.push(new TodoViewModel(items[i]));
            console.log(items[i]);
        }
        self.todoItems(newItems);
    });
    // immediately refresh to load initial data
    this.refresh();
    */
    newItems = [];
    // var data = [
    //     { name: 'Pending Item', complete: false },
    //    { name: 'Completed Item', complete: true },
    //    { name: 'Completed Two Item', complete: true }
    // ]
    // console.log(data);
    $.getJSON('api/todos', function(data) {
        var newItems = [];
        $.each( data, function( key,val ) {
            newItems.push(new TodoViewModel(val));
        })
    });
    // function() {
    //    return $.getJSON('api/todos');
    //});
    console.log(newItems);
};

$(function() {
    var viewModel = new TodoListViewModel();
  
    //insert some fake todo items for now...
    // viewModel.todoItems.push(
    //  new TodoViewModel({ name: 'Pending Item', complete: false }),
    //  new TodoViewModel({ name: 'Completed Item', complete: true }),
    //  new TodoViewModel({ name: 'Completed Two Item', complete: true })
    //);
  
    ko.applyBindings(viewModel);
  });