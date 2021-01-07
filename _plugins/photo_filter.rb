require "exifr/jpeg"

module Jekyll
  module PhotoFilter
    def photo_filter(files)
      photos = files.select {|photo| photo.relative_path.include?("original") }
      photos.sort_by do |photo|
        rand(1..100000)
        # EXIFR::JPEG.new(photo.path).date_time.to_s
      end.reverse
    end
  end
end
Liquid::Template.register_filter(Jekyll::PhotoFilter)