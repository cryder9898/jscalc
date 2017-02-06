$(document).ready(function(){
	var input = '';
	var num = '';

	function clearEntry() {
		$('#screen').text(0);
		var lastNum = input.match(/(\d+.)$/g)[0];	// match the last full number entered
		input = input.substr(0, input.length-lastNum.length);	// remove last number entered
    	num = '';
	}

	function allClear () {
		$('#screen').text(0);
		input = '';
		num = '';
	}

	function eval (input) {
		var str = input;
	}

    $('.calc-btn').click(function () {
    	var id = this.id;
    	switch (id) {
    		case 'AC':
    			allClear();
    			break;
    		case 'CE':
    			clearEntry();
    			break;
			case '+': 
			case '-':
			case '%':
			case 'x':
				// if the last character in input is not x+-%
				if (!/[x\+\-%]$/.test(input)) {
					input += id;
					$('#screen').text(id);
					num = '';
				}
				break;
			case '=':
				eval(input);
				break;
    		default:
    			input += id;
    			if (!isNaN(id)) {
    				num += id;
    				$('#screen').text(num);
    			}
    	}
    	console.log(input);	
    });
});