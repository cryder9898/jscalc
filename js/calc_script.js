$(document).ready(function(){
	var input = '';
	var op = false;

	function setZero() {
		$('#screen').text(0);
	}

	function allClear () {
		input = '';
		op = false;
	}

	function eval () {
		
	}

	setZero();
    $('.calc-btn').click(function () {
    	var id = this.id;
    	switch (id) {
    		case 'AC':
    			setZero();
    			allClear();
    			break;
    		case 'CE':
    			setZero();
    			break;
			case '+':
			case '-':
			case '%':
			case 'X':
				if (!op) {
					op = true;
			   		input += id;
					setZero();
				}
				break;
			case '=':
				eval();
				break;
    		default:
    			input += id;
    			console.log(input);
    			$('#screen').text(input);
    	}
    });
});