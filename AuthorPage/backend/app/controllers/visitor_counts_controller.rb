class VisitorCountsController < ApplicationController
  def show
    @visitor_count = VisitorCount.current
    render json: { count: @visitor_count.count }
  end

  def increment
    @visitor_count = VisitorCount.increment
    render json: { count: @visitor_count.count }
  end
end