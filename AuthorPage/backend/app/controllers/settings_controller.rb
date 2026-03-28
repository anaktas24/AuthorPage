class SettingsController < ApplicationController
  def create
    book = Book.find(params[:setting][:book_id])
    setting = book.settings.new(setting_params)

    if setting.save
      render json: setting, status: :created
    else
      render json: { error: setting.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    setting = Setting.find(params[:id])
    setting.destroy
    head :no_content
  end

  private
  def setting_params
    params.require(:setting).permit(:name, :description, :book_id)
  end
end
