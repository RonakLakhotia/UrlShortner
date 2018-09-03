

$('.btn-shorten').on('click', function(){

	$.ajax({
		url: '/newUrl',
		type: 'POST',
		dataType: 'JSON',
		data: {url: $('#short').val()},
		success: function(data) {
			
			console.log(data);
			if (data.shorterUrl != 'Incorrect url expression' && data.shorterUrl != 'Failed to store in Database') {
				var resultHTML = '<a class="result" href="' + data.shorterUrl + '" + target="_blank">'
				+ data.shorterUrl + '</a>';
				$('#link').html(resultHTML);
				$('#link').hide().fadeIn('slow');    
			} else {
				var resultHTML = '<h2>' + data.shorterUrl + '</h2>';
				$('#error').html(resultHTML);
				$('#error').hide().fadeIn('slow');
			}

		},
		error: function(jqXHR, textStatus, err) {
			alert('text status '+textStatus+', err '+err)
		}
	});
});


