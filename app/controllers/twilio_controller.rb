class TwilioController < ApplicationController

    def send_sms
        account_sid = 'AC3aec9f1b4eb62cb5b2a01a63e32afe7e'
        auth_token = 'fa48267131d91e7670b469561b913c8f'
        @client = Twilio::REST::Client.new account_sid, auth_token
        message = @client.account.messages.create(:body => twilio_params['message'],
            :to => "+18313452977",
            :from => "+18317080338")
        puts message.to
    end

    def twilio_params
        params.require(:twilio).permit(:message, :phone_number)
    end

end
