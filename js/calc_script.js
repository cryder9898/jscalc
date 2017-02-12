$(document).ready(function(){
	var input = '';
	var num = '';

	function clearEntry() {
		$('#screen').text(0);
		$('#screen').css('font-size', '50px');
	
		// match the last full number and/or operator entered
		var lastNum = input.match(/(\d+\.?\d*[\*\+\-\/]?)$/g)[0]; 

		// remove last number entered
		input = input.substr(0, input.length-lastNum.length);
		num = '';
	}

	function allClear () {
		$('#screen').text(0);
		$('#screen').css('font-size', '50px');	
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
			case '/':
			case '*':
				// if the last character in input is not x+-%.
				if (!/[\*\+\-\/\.]$/.test(input)) {
					input += id;
					$('#screen').text(id);
					num = '';
				}
				break;
			case '.':
				if (!/[\*\+\-\/\.]$/.test(input)) {
					input += id;
    				num += id;
    				$('#screen').text(num);
				}
				break;
			case '=':
				// evaluate input and set the answer to input
				input = execute(input);
				var result = Math.round(Number(input) * 100) / 100;
				if (result > 9999999999999) {
					$('#screen').css('font-size', '30px');
				}
				$('#screen').text(result);
				num = '';
				break;
    		default:
    			// if id is a number add it to the full number
    			if (!isNaN(id) && num.length < 11) {
    				input += id;
    				num += id;
    				$('#screen').text(num);
    			}
    	}
    	$('#input').text(input);	
    });
});