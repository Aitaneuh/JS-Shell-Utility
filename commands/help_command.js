import Command from './commands.js';

class HelpCommand extends Command {
    constructor() {
        super('help', 'display this message.');
    }

    execute(args, commandHandler) {
        if (!commandHandler) {
            return 'Error: CommandHandler is undifined.';
        }

        let response = 'List of all the commands:\n';
        commandHandler.commands.forEach(command => {
            response += `- ${command.name} : ${command.description}\n`;
        });

        return response;
    }
}

export default HelpCommand;
