import Command from './commands.js';

class HelpCommand extends Command {
    constructor() {
        super('help', 'display this message. Usage: help <?command>', 'Input: help clear\n\nOutput: <clear help message>');
    }

    execute(args, commandHandler) {
        let response = ''
        if (!commandHandler) {
            return 'Error: CommandHandler is undifined.';
        }
        if (args[0] != null) {
            let cmd = args[0]
            commandHandler.commands.forEach(command => {
                if (command.name == cmd) { response = `- ${command.name} : ${command.description}\n\n${command.example}`; }
            });
        } else {
            response = 'List of all the commands:\n';
            commandHandler.commands.forEach(command => {
                response += `- ${command.name} : ${command.description}\n`;
            });
        }

        return response;
    }
}

export default HelpCommand;
