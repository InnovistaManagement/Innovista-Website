# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :i18n, :mount_at_root => :de # Mount german at root 

#activate :i18n

set :js_dir, 'javascripts'
set :css_dir, 'stylesheets'
set :images_dir, "images"

page "/404.html", :directory_index => false

redirect "products", to: "http://www.innovista.ch/#products"

ignore 'blog/*'
#activate :blog do |blog|
#  blog.layout = "blog_article"
#  blog.sources = "blog/articles/{category}/{title}.html"
#  blog.permalink = "blog/{category}/{title}"
#end

activate :directory_indexes
set :relative_links, false
activate :sitemap, :gzip => false, :hostname => "http://www.innovista.ch"

configure :build do
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
end

activate :syntax, :line_numbers => false

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

