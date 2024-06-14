#!/usr/bin/env bash

echo "Installation de Graphviz"
sudo apt-get -y update
sudo apt-get -y install graphviz
bundle install
npm update
npx tailwindcss -i ./css/styles.css -o ./css/output.css
