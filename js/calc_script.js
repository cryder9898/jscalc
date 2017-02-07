$(document).ready(function(){
	var input = '';
	var num = '';

	function clearEntry() {
		$('#screen').text(0);
	
		// match the last full number and/or operator entered
		var lastNum = input.match(/(\d+\.?\d*[x\+\-%]?)$/g)[0]; 

		// remove last number entered
		input = input.substr(0, input.length-lastNum.length);
		num = '';
	}

	function allClear () {
		$('#screen').text(0);
		input = '';
		num = '';
	}

	function execute (input) {
		var result = eval(input);
		input = result;
		return result;
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
				if (!/[x\+\-%\.]$/.test(input)) {
					input += id;
					$('#screen').text(id);
					num = '';
				}
				break;
			case '.':
				if (!/[x\+\-%\.]$/.test(input)) {
					input += id;
    				num += id;
    				$('#screen').text(num);
				}
				break;
			case '=':
				// evaluate input and set the answer to input
				$('#screen').text(input = execute(input));
				num = '';
				break;
    		default:
    			// if id is a number add it to the full number
    			if (!isNaN(id)) {
    				input += id;
    				num += id;
    				$('#screen').text(num);
    			}
    	}

    	$('#input').text(input);	
    });
});