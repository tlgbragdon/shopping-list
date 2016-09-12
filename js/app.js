$(document).ready( function () {

   $('#js-shopping-list-form').submit(function(event){
   		event.preventDefault();

    // add new item to end of shopping list:
    //DONT DO IT THIS WAY - TOO MANY APPEND CALLS WHICH IS A HEAVY METHOD
    //	$('.shopping-list').append(
    //		$('<li>').append(
    //			$('<span>').attr('class', 'shopping-item').append(
    //				$('input').val() ),
    //				$('<div>').attr('class', 'shopping-item-controls').append(
    //					$('<button>').attr('class', 'shopping-item-toggle').append(
	//						$('<span>').attr('class','button-label').append(
    //							'check')
    //					),
    //						$('<button>').attr('class', 'shopping-item-delete').append(
	//							$('<span>').attr('class','button-label').append(
    //							'delete')
    //						)
    //			)
    //		)
    //	);


    // add new item to end of shopping list:
        // PREFERRED WAY TO DO THIS:
        $('.shopping-list').append(
            '<li>'+
              '<span class="shopping-item">' + $("input").val() + '</span>' +
              '<div class="shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
                  '<span class="button-label">check</span>' +
                '</button>' +
                '<button class="shopping-item-delete">' +
                  '<span class="button-label">delete</span>' +
                '</button>' +
              '</div>' +
            '</li>');
        // remove the submitted item from the form input
        $(this)[0].reset();

    });

	// remove button
	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
		$(this).closest("li").remove();
	});

	// check button
	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		//event.preventDefault();
		//$(this).parent().siblings('span').toggleClass ('shopping-item__checked');
        //BETTER WAY:
         $(this).closest("li").find(".shopping-item").toggleClass( "shopping-item__checked");
	});

});