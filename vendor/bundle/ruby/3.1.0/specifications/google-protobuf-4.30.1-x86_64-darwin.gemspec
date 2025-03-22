# -*- encoding: utf-8 -*-
# stub: google-protobuf 4.30.1 x86_64-darwin lib

Gem::Specification.new do |s|
  s.name = "google-protobuf".freeze
  s.version = "4.30.1"
  s.platform = "x86_64-darwin".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "source_code_uri" => "https://github.com/protocolbuffers/protobuf/tree/v4.30.1/ruby" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Protobuf Authors".freeze]
  s.date = "2025-03-13"
  s.description = "Protocol Buffers are Google's data interchange format.".freeze
  s.email = "protobuf@googlegroups.com".freeze
  s.homepage = "https://developers.google.com/protocol-buffers".freeze
  s.licenses = ["BSD-3-Clause".freeze]
  s.required_ruby_version = Gem::Requirement.new([">= 3.0".freeze, "< 3.5.dev".freeze])
  s.rubygems_version = "3.3.7".freeze
  s.summary = "Protocol Buffers".freeze

  s.installed_by_version = "3.3.7" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<rake-compiler-dock>.freeze, ["= 1.2.1"])
    s.add_runtime_dependency(%q<bigdecimal>.freeze, [">= 0"])
    s.add_runtime_dependency(%q<rake>.freeze, [">= 13"])
    s.add_development_dependency(%q<ffi>.freeze, ["~> 1"])
    s.add_development_dependency(%q<ffi-compiler>.freeze, ["~> 1"])
    s.add_development_dependency(%q<rake-compiler>.freeze, ["~> 1.1.0"])
    s.add_development_dependency(%q<test-unit>.freeze, ["~> 3.0", ">= 3.0.9"])
  else
    s.add_dependency(%q<rake-compiler-dock>.freeze, ["= 1.2.1"])
    s.add_dependency(%q<bigdecimal>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 13"])
    s.add_dependency(%q<ffi>.freeze, ["~> 1"])
    s.add_dependency(%q<ffi-compiler>.freeze, ["~> 1"])
    s.add_dependency(%q<rake-compiler>.freeze, ["~> 1.1.0"])
    s.add_dependency(%q<test-unit>.freeze, ["~> 3.0", ">= 3.0.9"])
  end
end
