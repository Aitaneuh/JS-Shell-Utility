import { readdirSync } from 'fs';
import { join, resolve } from 'path';

class CommandHandler {
    constructor() {
        this.commands = new Map();
    }

    async loadCommands(commandsDir) {
        const files = readdirSync(commandsDir);
        for (const file of files) {
            if (file.endsWith('_command.js')) {
                const filePath = `file://${resolve(join(commandsDir, file))}`;
                const { default: CommandClass } = await import(filePath);
                const commandInstance = new CommandClass();
                this.commands.set(commandInstance.name, commandInstance);
            }
        }
    }

    executeCommand(input) {
        let parts = input.trim().split(/\s+/);
        let commandName = parts.shift();
        let command = this.commands.get(commandName);
        if (!command) {
            return `Unknown command: ${commandName}`;
        }
        return command.execute(parts, this);
    }
}

export default CommandHandler;
