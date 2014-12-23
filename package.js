Package.describe({
  name: 'q42:ezpublish',
  summary: 'publish a collection once and let subscibers determine the details',
  version: '0.1.0',
  git: 'https://github.com/Q42/meteor-ezpublish'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.export('ezPublish');
  api.addFiles('q42:ezpublish.js');
});

Package.onTest(function(api) {
});
