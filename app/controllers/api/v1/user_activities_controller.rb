class Api::V1::UserActivitiesController < ApplicationController

  def index
    # @activies = UserActivities.where(user:current_user)
    @activities = {user:1, level:"Medium", duration:40, activity:1, date: DateTime.now,}
    render json:{@activities}
  end

  def show

  end

  def new

  end

  def create`

  end
end
