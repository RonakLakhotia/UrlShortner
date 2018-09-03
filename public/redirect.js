$('#link').click(function(e) {
	    var text = $(e.target).text();
	    console.log(text);
    	$.ajax({
		url: '/urlToForward',
		type: 'GET',
		dataType: 'JSON',
		data: {url: text},
		success: function(data) {
		},
		error: function(jqXHR, textStatus, err) {
			alert('text status '+textStatus+', err '+err)
		}
	});
});