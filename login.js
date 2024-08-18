// Google OAuth 2.0 configuration
var clientId = 'YOUR_CLIENT_ID';
var clientSecret = 'YOUR_CLIENT_SECRET';
var redirectUri = 'YOUR_REDIRECT_URI';
// Create a Google OAuth 2.0 button
var googleButton = document.createElement('button');
googleButton.innerHTML = 'Login with Google';
googleButton.onclick = function() {
  // Redirect to Google OAuth 2.0 authorization URL
  window.location.href = 'https://accounts.google.com/o/oauth2/auth?' +
    'client_id=' + clientId +
    '&redirect_uri=' + redirectUri +
    '&response_type=code' +
    '&scope=profile email';
};

// Add the Google OAuth 2.0 button to the login form
document.getElementById('login-form').appendChild(googleButton);