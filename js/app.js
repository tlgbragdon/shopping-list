$(document).ready( function () {

   $('#js-shopping-list-form').submit(function(event){

   		console.log( 'handler for submit')
   		console.log ('data: ' + $('input').val())
   		event.preventDefault();
  

    	// add new item to end of shopping list:
    	$('.shopping-list').append(
    		$('<li>').append(
    			$('<span>').attr('class', 'shopping-item').append(
    				$('input').val() ),
    				$('<div>').attr('class', 'shopping-item-controls').append(
    					$('<button>').attr('class', 'shopping-item-toggle').append(
							$('<span>').attr('class','button-label').append(
    							'check')
    					),
    						$('<button>').attr('class', 'shopping-item-delete').append(
								$('<span>').attr('class','button-label').append(
    							'delete')
    						)
    			)
    		)
    	);
   	});

	// remove button
	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
		$(this).closest("li").remove();
	});

	// check button
	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		//event.preventDefault();
		$(this).parent().siblings('span').toggleClass ('shopping-item__checked');

	});

});