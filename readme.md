Deployd starter kit

This project has everything you need to get started building on deployd

  Includes:
   app.js runscript
   /env/dev envirmenent varibles to be baked into config w/ runscript
   .gitignore
   readme.md starter 
   and the dependancies you'll likely use to get started:

  "dependencies": {
    "deployd": "^0.8.8",
    "dpd-event": "0.0.2",
    "dpd-event-extension": "0.0.3",
    "dpd-jobs": "^0.14.0",
    "getenv": "^0.6.0",
    "lodash": "^4.7.0",
    "moment": "^2.12.0",
    "request-promise": "^2.0.1"
  }


## to start a new project:
1) fork 
2) remove git remote 
git remote rm origin
3) add git remote
git remote add origin <YOUR NEW PROJECT's NAME>
git push -u origin --all 
git push -u origin --tags 


## install dependancies
```npm install```

## install env
```. env/dev.sh```

## create key
dpd keygen

## start app
```node app.js```

## Open dashboard in browser
http://localhost:2403/dashboard

## Open /public in browser
http://localhost:2403/dashboard
