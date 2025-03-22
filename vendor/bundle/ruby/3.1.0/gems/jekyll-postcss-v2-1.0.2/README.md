# Jekyll PostCSS v2
A revamp of [jekyll-postcss](https://github.com/mhanberg/jekyll-postcss) that uses Jekyll hooks and generally tries to be less complicated.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Why v2?](#why-v2)
- [Why not?](#why-not)
- [TODO](#todo)

## Installation

_`Gemfile`_
```ruby
group :jekyll_plugins do
  gem 'jekyll-postcss-v2'
end
```

_`_config.yml`  
<sup>(Until [jekyll#8585](https://github.com/jekyll/jekyll/pull/8585) is released)</sup>_ 
```yml
plugins:
  - jekyll-postcss-v2
```

_In your jekyll source directory:_
```bash
npm i postcss postcss-cli
```

Also install any postcss plugins you wish to use. For example, [fluidvars](https://github.com/bglw/postcss-fluidvars), [autoprefixer](https://github.com/postcss/autoprefixer), [cssnano](https://cssnano.co/) etc.

## Usage

Configure your `postcss.config.js` file in your jekyll source directory.

## Configuration

This plugin will try and locate Postcss automatically. If this fails, you can specify locations in the `_config.yml` file of your site:
```yml
postcss:
  script: node_modules/.bin/postcss
  config: postcss.config.js
```

## Deployment

No extra configuration is required for deployment on platforms like [CloudCannon](https://cloudcannon.com/) which support custom plugins.

Please note that this plugin isn't supported by [GitHub Pages](https://pages.github.com/).  
To host on GitHub Pages and use this plugin, use GitHub Actions to build and deploy your website.

To do that, you need to specify a workflow inside the `.github/workflows` of your repository for your build process. This could look like the following:

```yml
name: Jekyll Deploy

on:
  schedule:
    # run daily at 05:30
    - cron:  '30 5 * * *'
  push:
    branches:
      - main
    paths-ignore:
      - 'Gemfile'
      - 'README.md'
      - 'LICENSE.md'
 
# Build site using jekyll
jobs:
  jekyll:
    runs-on: ubuntu-latest
    steps:
      # checkout code
      - uses: actions/checkout@v2
      # Use ruby/setup-ruby to shorten build times
      # https://github.com/ruby/setup-ruby
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 2.7 # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically
      # Install Node as this is needed for PostCSS
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      # Install PostCSS plugins (from your package.json)
      - run: npm install
      - name: Build site
      # use jekyll-action-ts to build
      # https://github.com/limjh16/jekyll-action-ts
        uses: limjh16/jekyll-action-ts@v2
        with:
          enable_cache: true
          # custom_opts: '--verbose --trace'  #'--drafts --future'
          ### If you need to specify any Jekyll build options, enable the above input
          ### Flags accepted can be found here https://jekyllrb.com/docs/configuration/options/#build-command-options
      # use actions-gh-pages to deploy
      # https://github.com/peaceiris/actions-gh-pages
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          # GITHUB_TOKEN secret is set up automatically
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

See:

- https://github.com/limjh16/jekyll-action-ts/ for more details about the GitHub Action compiling your site.

## Why v2?
- Better logging to help catch when things aren't running
- Processes the output file on disk, skipping the need to parse Sass
- Doesn't transfer file contents over a network or cli parameter, avoiding issues when files are too large for buffers
- Respects the Jekyll source directory for configuration files
- Fewer moving parts. No sockets, no bundled node scripts, no internal caching
- Probably works with Tailwind JIT<sup>[citation needed]</sup> 🤷‍♂️

## Why not?
- Potentially slower<sup>[citation needed]</sup>, but more than fast enough for my needs. 

## TODO
- Write tests
- Wire up a CI
- Add configuration
  - _postcss.config.js location_
  - _node_modules location_
- Profile in production / development
- Investigate what needs to be done around the sourcemap
- More logging.
  - Before/after filesizes
  - Timings
