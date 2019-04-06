class Api::V1::ActivitiesController < ApplicationController
  def index
    render json: {
      activities: [
        {id:1,name: "cardio"},
        {id:2,name: "weights"},
        {id:3,name: "dancing"},
        {id:39,name: "dancing"},
        {id:4,name: "cuddling"}
      ]
    }
  end
end
