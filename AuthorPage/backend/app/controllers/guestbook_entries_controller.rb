class GuestbookEntriesController < ApplicationController
  def index
    @entries = GuestbookEntry.order(created_at: :desc).limit(5)
    render json: @entries
  end

  def create
    @entry = GuestbookEntry.new(guestbook_entry_params)
    if @entry.save
      render json: @entry, status: :created
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  private

  def guestbook_entry_params
    params.require(:guestbook_entry).permit(:name, :message)
  end
end