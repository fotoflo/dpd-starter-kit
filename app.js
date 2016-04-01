var _ = require('lodash');
var getenv = require('getenv');

config = {
    'dpdServerRoot' :    getenv('R4_DPD_SERVER_ROOT'),
    'dpd_port'    :   getenv.int('R4_DPD_PORT'),
    'dpd_env'   :   getenv('R4_DPD_ENV')
  };

  init(config);

lodash = require('lodash');
moment = require('moment');
request = require('request-promise');

function init(config){

  console.log("Welcome to Deployd!  Config loaded!");

  _.forEach(config, function(n, key){
    console.log(key, " : ",  n);
  });

  var deployd = require('deployd');
  var deploydOptions = {
    port: config.dpd_port,
    env: config.dpd_env
  };
  var dpd = deployd(deploydOptions);
  dpd.listen();

  dpd.on('listening', function() {
    console.log("Deployd is listening on " + config.dpdServerRoot);
  });

  dpd.on('error', function(err) {
    console.error(err);
    process.nextTick(function() { // Give the server a chance to return an error
      process.exit();
    });
  });

  console.log("");
}
