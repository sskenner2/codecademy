#before filter
before_action :require_login, only: [:edit, :update] # except:
#...
private
def require_login
  # do stuff to check if user is logged in
end

# set a session value
session[:current_user_id] = user.id

# access a session value
some_other_variable_value = session[:other_variable_key]

# reset a session key
session[:key_to_be_reset] = nil

# reset the entire session
reset_session

# flash when user can't sign up bc failed validations
flash.now[:error] = "fix yo shit!"
