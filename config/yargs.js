const { number } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: boolean,
                    demandOption: true,
                    default: false
                })
                .option('h', {
                    alias: 'hasta',
                    type: number,
                    demandOption: true,
                })
                .check((argv, options) => {
                    if( isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })    
                .argv;

module.exports = argv;