#!/bin/sh
npm install
bundle install
bundle exec jekyll serve --incremental --trace --livereload --open-url --drafts

