# -*- encoding: utf-8 -*-
# stub: jekyll-auto-authors 1.0.4 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-auto-authors".freeze
  s.version = "1.0.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Gourav Khunger".freeze]
  s.date = "2023-05-11"
  s.description = "A plugin to seamlessly support multiple authors with paginated posts inside a jekyll powered publication blog. Extends jekyll-paginate-v2 for Autopages and Pagination.".freeze
  s.email = ["gouravkhunger18@gmail.com".freeze]
  s.homepage = "https://github.com/gouravkhunger/jekyll-auto-authors".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0.0".freeze)
  s.rubygems_version = "3.3.7".freeze
  s.summary = "Seamless multiple authors support for jekyll powered publications".freeze

  s.installed_by_version = "3.3.7" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.0.0"])
    s.add_runtime_dependency(%q<jekyll-paginate-v2>.freeze, [">= 3.0.0"])
    s.add_development_dependency(%q<bundler>.freeze, [">= 2.0.0"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.0.0"])
    s.add_dependency(%q<jekyll-paginate-v2>.freeze, [">= 3.0.0"])
    s.add_dependency(%q<bundler>.freeze, [">= 2.0.0"])
  end
end
