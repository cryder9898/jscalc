
$(document).ready(function(){
	$('#screen').text(0);
    $('.calc-btn').click(function () {
    	var id = this.id;

    	// resets back to zero
    	if (id === "AC" || id === "CE") {
    		$('#screen').text(0);
    	}

    	if ($('#screen').text() === 0) {
    		$('#screen').text(id);
    	} else {
    		$('#screen').append(id);
    	}

    });
});