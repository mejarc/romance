require 'rubygems'
ENV['RACK_ENV'] ||= 'test'

require File.expand_path("../../config/environment", __FILE__)
require 'shoulda-matchers'
require 'capybara'
require 'rack/test'
require 'factory_girl'

FactoryGirl.definition_file_paths = %w{./factories ./test/factories ./spec/factories}
FactoryGirl.find_definitions

RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.include FactoryGirl::Syntax::Methods
  config.include Capybara::DSL
  config.color_enabled = true
  config.formatter = :documentation # :progress, :html, :textmate
end

def app
  Sinatra::Application
end

Capybara.app = app
