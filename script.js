/* Exercise 1: Wish list */
function addToList(item) {
	$('#items').append('<li>' + item + "<span class='label pending'>Pending</span>" + '</li>')
	$('#item').val('');
	updateTotals();
}
$(document).on('click', '#add-to-list', function () {
	addToList($('#item').val());
});
$(document).on('click', '.pending', function () {
	var li_node = $(this).parent();
	$(li_node).append("<span class='label success'>Done!</span>");
	$(li_node.children(".pending").remove());
	li_node.addClass('completed');
	updateTotals();
});
function updateTotals() {
	var pending = $('.pending').length;
	var completed = $('.completed').length;
	$('.total').text('Pending: ' + pending + ' Completed: ' + completed);
}
/* end of tutorial, extra function: allow return key to add item to list */
/* code snipet taken from https://jsfiddle.net/VrwgP/232/  */
(function($) {
$.fn.onEnter = function(func) {
        this.bind('keypress', function(e) {
            if (e.keyCode == 13) func.apply(this, [e]);    
        });               
	console.log('in fn');
        return this; 
     };
})(jQuery);
$( function () {
    console.log($("input"));
    $("input").onEnter( function() {
	addToList($('#item').val());
/*	$(this).val("Enter key pressed");  */                       
    });
});
