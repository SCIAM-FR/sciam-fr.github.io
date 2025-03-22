# -*- encoding: utf-8 -*-
# stub: jekyll-postcss-v2 1.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-postcss-v2".freeze
  s.version = "1.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "homepage_uri" => "https://github.com/bglw/jekyll-postcss-v2", "source_code_uri" => "https://github.com/bglw/jekyll-postcss-v2" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Liam Bigelow".freeze]
  s.bindir = "exe".freeze
  s.date = "2023-07-31"
  s.description = "Straight up PostCSS for Jekyll.".freeze
  s.email = ["liam@bigelow.io".freeze]
  s.homepage = "https://github.com/bglw/jekyll-postcss-v2".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.7".freeze
  s.summary = "Straight up PostCSS for Jekyll.".freeze

  s.installed_by_version = "3.3.7" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, ["~> 2.1"])
    s.add_development_dependency(%q<jekyll>.freeze, [">= 3.0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 12.3.3"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_development_dependency(%q<rubocop-jekyll>.freeze, ["~> 0.5.1"])
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 2.1"])
    s.add_dependency(%q<jekyll>.freeze, [">= 3.0"])
    s.add_dependency(%q<rake>.freeze, [">= 12.3.3"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<rubocop-jekyll>.freeze, ["~> 0.5.1"])
  end
end
