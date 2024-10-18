@echo off
call npm install
call bundle install
call bundle exec jekyll serve --incremental --trace --livereload --open-url --drafts
