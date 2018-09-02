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
        // var resultHTML = '<a class="result" href="' + data.shortUrl + '">'
        //     + data.shortUrl + '</a>';
        // $('#link').html(resultHTML);
        // $('#link').hide().fadeIn('slow');
        console.log('yes');
    },
    error: function(jqXHR, textStatus, err) {
    	alert('text status '+textStatus+', err '+err)
    }
});
});
