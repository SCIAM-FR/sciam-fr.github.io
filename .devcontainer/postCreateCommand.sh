#!/bin/bash

echo "Before Launch"
sudo apt-get update
sudo apt-get install graphviz
bundle install
bundle exec jekyll serve -l -o