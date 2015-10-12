Package.describe({
  name: 'datamaker:react',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Welcome to Meteor-React-0.14.0',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/datamaker/react.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('react.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('datamaker:react');
  api.addFiles('react-tests.js');
});
