class WorldbuildingsController < ApplicationController
  include Rails.application.routes.url_helpers

  def update
    # We find by Book ID because we are editing the book's world
    # This assumes your route will be /api/worldbuildings/:book_id
    book = Book.find(params[:id])

    # Find existing or initialize new
    world = book.worldbuilding || book.build_worldbuilding

    # Update text fields
    world.assign_attributes(world_params.except(:map))

    # Handle Map Upload
    if params[:map]
      world.map.attach(params[:map])
    end

    if world.save
      # Return the data WITH the map URL
      render json: world.as_json.merge({
        map_url: world.map.attached? ? url_for(world.map) : nil
      })
    else
      render json: { error: world.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def world_params
    # We use Permit directly because FormData sends flat keys (not nested)
    params.permit(:magic, :history, :culture, :map)
  end
end
