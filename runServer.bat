@echo off
npm install
bundle install
bundle exec jekyll serve --incremental --trace --livereload --open-url --drafts
