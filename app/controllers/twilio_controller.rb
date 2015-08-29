class TwilioController < ApplicationController

	def send_sms
	p twilio_params
# Get your Account Sid and Auth Token from twilio.com/user/account
	account_sid = 'AC3aec9f1b4eb62cb5b2a01a63e32afe7e'
	auth_token = 'fa48267131d91e7670b469561b913c8f'
	@client = Twilio::REST::Client.new account_sid, auth_token
	 
	message = @client.account.messages.create(:body => twilio_params['message'],
	    :to => twilio_params['phone_number'],     # Replace with your phone number
	    :from => "+18317080338")   # Replace with your Twilio number
	puts message.sid
	end
  
  # private
  
  def twilio_params
    params.require(:twilio).permit(:message, :phone_number)
  end



end
