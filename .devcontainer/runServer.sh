#!/bin/sh
npm update
bundle update
bundle exec jekyll serve --incremental --open-url --drafts

