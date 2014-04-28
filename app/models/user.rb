# Stores only a Facebook token and concocted pseudonym.
class User < ActiveRecord::Base
  def self.make_pseudonym
    result = []
    sources = [FirstName, MiddleName, LastName]
    sources.each do |source|
      result << source.all.sample.name
    end
    result.join(' ')
  end
end
