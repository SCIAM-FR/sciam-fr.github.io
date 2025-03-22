# -*- encoding: utf-8 -*-
# stub: asciidoctor-diagram-plantuml 1.2024.5 ruby lib

Gem::Specification.new do |s|
  s.name = "asciidoctor-diagram-plantuml".freeze
  s.version = "1.2024.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Pepijn Van Eeckhoudt".freeze]
  s.date = "2024-05-29"
  s.description = "PlantUML JAR files wrapped in a Ruby gem".freeze
  s.email = ["pepijn@vaneeckhoudt.net".freeze]
  s.homepage = "https://github.com/asciidoctor/asciidoctor-diagram".freeze
  s.licenses = ["LGPL-3.0-only".freeze]
  s.rubygems_version = "3.0.3.1".freeze
  s.summary = "PlantUML JAR files wrapped in a Ruby gem".freeze

  s.installed_by_version = "3.0.3.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<asciidoctor-diagram-batik>.freeze, ["~> 1.17"])
    else
      s.add_dependency(%q<asciidoctor-diagram-batik>.freeze, ["~> 1.17"])
    end
  else
    s.add_dependency(%q<asciidoctor-diagram-batik>.freeze, ["~> 1.17"])
  end
end
