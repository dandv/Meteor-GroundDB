Package.describe({
  name: "rtnpro:grounddb",
  version: "0.1.4",
  summary: "Ground Meteor.Collections offline",
  git: "https://github.com/waartaa/Meteor-GroundDB.git"
});

Package.onUse(function (api) {
  "use strict";
  api.export && api.export('GroundDB');
  api.export && api.export('_gDB', ['client', 'server'], {testOnly: true});
  api.use([
    'meteor@1.0.0',
    'underscore@1.0.0',
    'random@1.0.0',
    'minimongo@1.0.0',
    'ejson@1.0.0',
    'raix:minimax@0.1.0'
    ], ['client', 'server']);

  api.use('standard-app-packages@1.0.0', ['client', 'server']);

  api.use(['deps@1.0.0'], 'client');
  //api.use([], 'server');
  //api.use(['localstorage', 'ejson'], 'client');
  api.addFiles('groundDB.client.js', 'client');
  api.addFiles('groundDB.server.js', 'server');
});

Package.onTest(function (api) {
  api.use('rtnpro:grounddb', ['client']);
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.addFiles('groundDB.client.tests.js', 'client');
  api.addFiles('groundDB.server.tests.js', 'server');
});
