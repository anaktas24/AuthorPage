source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '>= 3.2.0'

gem 'rails', '~> 7.1.0'
gem 'pg', '~> 1.5'
gem 'puma', '~> 6.0'
gem 'rack-cors'
gem 'ostruct', '~> 0.6.0' # Locked version to fix warning
gem 'tzinfo-data', platforms: %i[ mingw mswin x64_mingw jruby ]
gem 'bootsnap', require: false

group :development, :test do
  gem 'debug', platforms: %i[ mri mingw x64_mingw ]
  gem 'dotenv-rails', groups: [:development, :test]

end

group :development do
end
