# Encoding: utf-8

require 'rubygems'
require 'nokogiri'
require 'open-uri'

def get_cheeses(url)
  cheeses = Nokogiri::HTML(open(url))

  cheeses.css('#mw-content-text ul li a[title]').map(&:text)
end

puts get_cheeses('https://en.wikipedia.org/wiki/List_of_Italian_cheeses')
