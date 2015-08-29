var account_sid = 'AC3aec9f1b4eb62cb5b2a01a63e32afe7e',
	auth_token = 'fa48267131d91e7670b469561b913c8f'

function sendSMS(msg, num){
	var textObj = {
	 twilio: {message: msg, phone_number: num}
	}
	$.ajax({
	 url: '/twilio/send_sms',
	 type: 'post',
	 data: textObj
	}).success(function(data){
	 console.log('Hi vanessa')
	}).fail(function(){
	})
}

$('.twillio').on('click', sendSMS('Hoot hoot!'));
