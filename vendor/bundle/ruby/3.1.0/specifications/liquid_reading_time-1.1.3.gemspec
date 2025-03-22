# -*- encoding: utf-8 -*-
# stub: liquid_reading_time 1.1.3 ruby lib

Gem::Specification.new do |s|
  s.name = "liquid_reading_time".freeze
  s.version = "1.1.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Benjamin Esham".freeze]
  s.date = "2017-07-19"
  s.description = "A Liquid filter that intelligently counts the number of words in a piece of HTML and estimates how long the text will take to read.".freeze
  s.email = "benjamin@esham.io".freeze
  s.homepage = "https://github.com/bdesham/reading_time".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.7".freeze
  s.summary = "A Liquid filter to count words and estimate reading times.".freeze

  s.installed_by_version = "3.3.7" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<liquid>.freeze, [">= 2.6", "< 5.0"])
    s.add_runtime_dependency(%q<nokogiri>.freeze, ["~> 1.6"])
  else
    s.add_dependency(%q<liquid>.freeze, [">= 2.6", "< 5.0"])
    s.add_dependency(%q<nokogiri>.freeze, ["~> 1.6"])
  end
end
