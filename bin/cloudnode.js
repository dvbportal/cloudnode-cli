#!/usr/bin/env node

process.cloudnode = {
    brand: 'cloudnode',
    apihost: 'api.cloudno.de',
    apisecure: true
}

var cli = require('cloudnode-cli'),
    command = process.argv[0],
    cmds = cli.commands;
    
cli.run(cmds, command);
