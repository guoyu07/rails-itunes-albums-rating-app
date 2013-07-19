namespace :itunes do
  desc "Import iTunes library"
  task :import => :environment do
    file = File.open('itunes.txt', 'r')

    file.each_line do |line|
      data = line.split(/\t/)
      Album.create(
        :name => data[1],
        :artist => data[2],
        :year => data[3].to_i
      )
    end

    file.close
  end
end