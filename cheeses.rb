# Encoding: utf-8

# require 'rubygems'
require 'nokogiri'
require 'open-uri'

def parse_sources(url, selector)
  data = Nokogiri::HTML(open(url))
  data.css(selector).map(&:text)
end

def treat_data(data)
  # obtain random array element
  datum = data.sample
  # convert to title case
  datum.split(/(\W)/).map(&:capitalize).join
end

names = []
# First Name
first_name = parse_sources('http://en.wikipedia.org/wiki/County_flowers_of_the_United_Kingdom', '#mw-content-text .wikitable td:nth-of-type(3)')

# Middle Name
middle_name = parse_sources('http://en.wikipedia.org/wiki/List_of_Italian_PDO_cheeses', '#mw-content-text .wikitable td:first-of-type a[title]')

# Last Name
last_name = parse_sources('http://en.wikipedia.org/wiki/List_of_Scottish_clans', '#mw-content-text .wikitable td:first-of-type')

# Build an array of names to feed a JSON file
10.times do  
  names << "#{treat_data(first_name)} #{treat_data(middle_name)} #{treat_data(last_name)}"
end
p names