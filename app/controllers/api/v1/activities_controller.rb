class Api::V1::ActivitiesController < ApplicationController
  def index
    render json: {
      activities: ["a", "b", "c"]
    }
  end
end
