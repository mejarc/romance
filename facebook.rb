# Encoding: utf-8

require 'sinatra'
require 'sinatra/cookies'
require 'omniauth-facebook'
require './helpers/get_post'

enable :sessions

set :protection, :except => :frame_options

configure do
  set :redirect_uri, nil
end

OmniAuth.config.on_failure = lambda do |env|
  [302, {'Location' => '/auth/failure', 'Content-Type' => 'text/html'}]
end

APP_ID = #
APP_SECRET = #

use OmniAuth::Builder do
  provider :facebook, APP_ID, APP_SECRET, { :scope => 'email, status_update, publish_stream'}
end

get_post '/' do
  @articles = []
  @articles << {:title => 'Your Romance Novel Author Name'}

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

# Canvas URL: ...
# Secure Canvas URL: ...

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
  oauth_url += '?client_id= ...'
  oauth_url += 'redirect_uri=' + encodeURIComponent('<%=settings.redirect_uri%>');
  oauth_url += '&scope=email, status_update, publish_stream';

  window.top.location = oauth_url;
</script>
