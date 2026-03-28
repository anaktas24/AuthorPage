class ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: { message: 'Contact submission saved' }, status: :created
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end