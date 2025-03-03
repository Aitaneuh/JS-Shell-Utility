import { createInterface } from 'readline';
import CommandHandler from './command_handler.js'
import HelpCommand from './commands/help_command.js';

const commandHandler = new CommandHandler();

async function init() {
    commandHandler.loadCommands('./commands');

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function prompt() {
        rl.question('> ', (input) => {
            console.log(commandHandler.executeCommand(input));
            prompt();
        });
    }

    commandHandler.commands.set('help', new HelpCommand());

    console.log('JS mini Shell is ready, type a command to start:');
    prompt();
}

init();