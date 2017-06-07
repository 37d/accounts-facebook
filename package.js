Package.describe({
  summary: "Login service for Facebook (2.4) accounts (works with cordova)",
  version: "0.0.8",
  git: "https://github.com/37d/accounts-facebook.git",
  author: "37d",
  name: "37d:accounts-facebook-cordova",
});

Package.on_use(function(api) {
  api.versionsFrom('1.4');

  api.use([
    'meteor-base',
    'ecmascript',
    'accounts-base',
    'accounts-facebook',
    'service-configuration',
  ], ['client', 'server']);

  api.use([ 'http', 'underscore'], ['server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.add_files('facebook_server.js', 'server');
  api.add_files("facebook.js");
});
