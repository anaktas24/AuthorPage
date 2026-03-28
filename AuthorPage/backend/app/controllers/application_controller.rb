class ApplicationController < ActionController::Base
  def fallback
    render file: Rails.root.join('public', 'index.html'), layout: false
  end
end