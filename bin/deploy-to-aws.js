const {exec} = require('shelljs')
exec('cd dist && ../node_modules/.bin/serverless deploy -v')
