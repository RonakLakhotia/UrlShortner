// const button = document.getElementById("short");
// console.log(button);

$('.btn-shorten').on('click', function(){

	$.ajax({
		url: '/newUrl',
		type: 'POST',
		dataType: 'JSON',
		data: {url: $('#short').val()},
		success: function(data) {
	    
	    console.log(data);
	    if (data.shorterUrl != 'Incorrect url expression' && data.shorterUrl != 'Failed to store in Database') {
		    var resultHTML = '<a class="result" href="' + data.shorterUrl + '">'
		        + data.shorterUrl + '</a>';
	    } else {
	    	var resultHTML = '<h2>' + data.shorterUrl + '</h2>';
	    }
    	$('#link').html(resultHTML);
	    $('#link').hide().fadeIn('slow');
    },
    error: function(jqXHR, textStatus, err) {
    	alert('text status '+textStatus+', err '+err)
    }
});
});
