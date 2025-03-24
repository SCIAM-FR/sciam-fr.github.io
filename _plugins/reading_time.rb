module Jekyll
  class ReadingTime < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.strip
    end

    def render(context)
      content = context[@markup] || ""
      word_count = content.split.size
      reading_time = (word_count / 240.0).ceil

      "#{reading_time} min"
    end
  end
end

Liquid::Template.register_tag('reading_time', Jekyll::ReadingTime)
