# intro

*PM2 is a daemon process manager that will help you manage and keep your application online. Getting started with PM2 is straightforward, it is offered as a simple and intuitive CLI, installable via NPM.*

 - documentation at : [pm2 documentation](https://pm2.keymetrics.io/docs/usage/quick-start);

# init the nodejs project 

 - this project is need if you want to use 'rollup' NodeJS package :

```

npm init 
...
package name: (pm2-process-manager_001)
version: (1.0.0)
description: simple exampe with pm2 and other features
entry point: (app.js)
test command:
git repository:
keywords: catafest,nodejs,pm2
author: catafest
license: (ISC)
About to write to C:\PM2-process-manager_001\package.json:

{
  "name": "pm2-process-manager_001",
  "version": "1.0.0",
  "description": "simple exampe with pm2 and other features",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "catafest",
    "nodejs",
    "pm2"
  ],
  "author": "catafest",
  "license": "ISC"
}

Is this OK? (yes) yes

```

# create the project and installation

```

C:\>mkdir PM2-process-manager_001

C:\>cd PM2-process-manager_001

C:\PM2-process-manager_001>npm install pm2@latest -g

```

 - create a new javascript process manager example named 'app.js':

 - this command will generate configuration file with reference to 'index.js' ... 

```

PM2-process-manager_001> pm2 ecosystem
File C:\PM2-process-manager_001\ecosystem.config.js generated

```

 - dependencies in this file can be changed according to task configuration;

 - this command will update the in-memory PM2:

```

pm2 update
Be sure to have the latest version by doing `npm install pm2@latest -g` before doing this procedure.
[PM2] Applying action deleteProcessId on app [all](ids: [ 0 ])
[PM2] [app](0) ✓
[PM2] [v] All Applications Stopped
[PM2] [v] PM2 Daemon Stopped
[PM2] Spawning PM2 daemon with pm2_home=C:\Users\Catalin Festila\.pm2
[PM2] Restoring processes located in C:\Users\Catalin Festila\.pm2\dump.pm2
[PM2] Process C:\PM2-process-manager_001\app.js restored
>>>>>>>>>> PM2 updated
┌────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user      watching  │
├────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ app    │ default     │ N/A     │ fork    │ 15528    │ 0s     │ 0    │ online    │ 0%       │ 38.4mb   │ Cat…     │ disabled │
└────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘

```

 - this command will show the table with status information:

```

pm2 status
┌────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ app    │ default     │ N/A     │ fork    │ 15528    │ 2m     │ 0    │ online    │ 0%       │ 34.7mb   │ Cat… │ disabled │
└────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘

```

 - the 'app.js' file can be used with these commands:
 
```

PM2-process-manager_001>pm2 start app.js --name my-app
[PM2] Starting C:\PM2-process-manager_001\app.js in fork_mode (1 instance)
[PM2] Done.
┌────┬───────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name      │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼───────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ app       │ default     │ N/A     │ fork    │ 15528    │ 5m     │ 0    │ online    │ 0%       │ 34.2mb   │ Cat… │ disabled │
│ 1  │ my-app    │ default     │ N/A     │ fork    │ 8168     │ 0s     │ 0    │ online    │ 12.5%    │ 40.3mb   │ Cat… │ disabled │
└────┴───────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
[PM2][WARN] Current process list is not synchronized with saved list. Type 'pm2 save' to synchronize.

pm2 stop my-app

[PM2] Applying action stopProcessId on app [my-app](ids: [ 1 ])
[PM2] [my-app](1) ✓
┌────┬───────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name      │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼───────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ app       │ default     │ N/A     │ fork    │ 15528    │ 5m     │ 0    │ online    │ 0%       │ 34.2mb   │ Cat… │ disabled │
│ 1  │ my-app    │ default     │ N/A     │ fork    │ 0        │ 0      │ 0    │ stopped   │ 0%       │ 0b       │ Cat… │ disabled │
└────┴───────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
[PM2][WARN] Current process list is not synchronized with saved list. Type 'pm2 save' to synchronize.

```

# using the rollup

- add "type": "module" into this config file : package.json;
- fix the app.js file:

```

//const http = require('http');
import http from 'http';

```

- install the 'rollup' and 'http' NodeJS modules:

```

npm install http
npm install -g rollup

```
 - add this setting file named 'rollup.config.js' :

```

export default {
  input: 'app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'// to use import in ass.js
  }
};

```

- use the rollup command and test it with node dist/bundle.js:

```

PM2-process-manager_001>rollup -c

app.js → dist/bundle.js...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
http (imported by "app.js")
created dist/bundle.js in 41ms

C:\PM2-process-manager_001>node dist/bundle.js
Server is running on port 3000

```
 - see the result on the server at : http://localhost:3000 ;