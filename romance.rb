# Encoding: utf-8

require 'sinatra'
require 'sinatra/cookies'
require 'omniauth-facebook'
require 'fb_graph'
require './helpers/get_post'

enable :sessions

set :protection, :except => :frame_options

configure do
  set :redirect_uri, nil
end

OmniAuth.config.on_failure = lambda do |env|
  [302, {'Location' => '/auth/failure', 'Content-Type' => 'text/html'}]
end

APP_ID = '112427873827'
APP_SECRET = 'e1f6f709d008551e50f19240eb97ad71'

use OmniAuth::Builder do
  provider :facebook, APP_ID, APP_SECRET, { :scope => 'email, status_update, publish_stream'}
end

get_post '/' do
  @title = ''
  erb :index
end

# After authentication
get '/auth/facebook/callback' do
  fb_auth = request.env['omniauth.auth']
  session['fb_auth']
  session['fb_token'] = cookies[:fb_token] = fb_auth['credentials']['token']
  session['fb_error'] = nil
  redirect '/'
end

# Handling auth failure
get '/auth/failure' do
  clear_session
  session['fb_error'] = 'We need your permission to use Facebook features, which you have not granted.'
end

get '/login' do
  if settings.redirect_uri
    # in FB canvas
    erb :dialog_oauth
  else
    # the standalone app
    redirect '/auth/facebook'
  end
end

get '/logout' do
  clear_session
  redirect '/'
end

get '/about' do
  @title = 'About This Application'
  erb :about
end

get '/tos' do
  @title = 'Terms Of Service'
  erb :tos
end

get '/privacy' do
  @title = 'Privacy Policy'
  erb :privacy
end

# access point from FB, Canvas URL and Secure Canvas URL must be point to this route
# Canvas URL: http://localhost:9292/canvas/
# Secure Canvas URL: https://localhost:443/canvas/

post '/canvas/' do
  # if user doesn't grant permission
  redirect '/auth/failure' if request.params['error'] == 'access_denied'
  settings.redirect_uri = 'https://apps.facebook.com/romance-author-name/'

  # Assessing whether user is accessing the app from the FB iframe
  url = request.params['code'] ? "/auth/facebook?signed_request=#{request.params['signed_request']}&state=canvas" : '/login'
end

def clear_session
  session['fb_auth'] = nil
  session['fb_token'] = nil
  session['fb_error'] = nil
end

# stop Ruby parsing
__END__

@@dialog_oauth
<script>
  var oauth_url = 'https://www.facebook.com/dialog/oauth/';
  oauth_url += '?client_id=112427873827'
  oauth_url += 'redirect_uri=' + encodeURIComponent('<%=settings.redirect_uri%>');
  oauth_url += '&scope=email, status_update, publish_stream';

  window.top.location = oauth_url;
</script>
