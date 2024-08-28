#!/bin/sh
npm install
bundle install
bundle exec jekyll serve --incremental --livereload --open-url --drafts --livereload_port 4321

