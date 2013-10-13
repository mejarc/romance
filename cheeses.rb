# Encoding: utf-8

# require 'rubygems'
require 'nokogiri'
require 'open-uri'

def get_sources(url)
  sources = Nokogiri::HTML(open(url))
  sources.css('#mw-content-text ul li a[title]').map(&:text)
end

# # First Name
# puts get_sources('http://en.wikipedia.org/wiki/County_flowers_of_the_United_Kingdom')

# # Middle Name
# puts get_sources('http://en.wikipedia.org/wiki/List_of_Italian_cheeses')
# puts get_sources('http://en.wikipedia.org/wiki/One_Hundred_Years_War')
# somehow these create one fabulous arrayy
# Last Name
puts get_sources('http://en.wikipedia.org/wiki/List_of_religious_houses_in_Scotland')
