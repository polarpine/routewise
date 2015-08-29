require 'pry'

class MapsController < ApplicationController
  def index
    @destination = params[:q]
  end
end
