first_names = File.open("#{APP_ROOT}/db/fixtures/first.txt", 'r+')
middle_names = File.open("#{APP_ROOT}/db/fixtures/middle.txt", 'r+')
last_names = File.open("#{APP_ROOT}/db/fixtures/last.txt", 'r+')

first_names.each_line do |line|
  FirstName.create({ name: line.chomp })
end

middle_names.each_line do |line|
  MiddleName.create({ name: line.chomp })
end

last_names.each_line do |line|
  LastName.create({ name: line.chomp })
end