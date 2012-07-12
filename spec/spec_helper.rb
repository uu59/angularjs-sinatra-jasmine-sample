# -- coding: utf-8

ENV["RACK_ENV"] = "test"
require File.expand_path(File.dirname(__FILE__) + "/../app.rb")
disable :run

require "capybara/dsl"
require "capybara/rspec"
require "capybara/webkit"
Dir["./spec/support/**/*.rb"].each{|f| require f}

RSpec.configure do |conf|
  conf.include Capybara::DSL
  Capybara.javascript_driver = :webkit
  Capybara.app = Sinatra::Application.new
end
