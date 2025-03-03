import Command from './commands.js';

class ClearCommand extends Command {
    constructor() {
        super('clear', 'Clear the console shell.');
    }

    execute(args) {
        console.clear();
        return 'Console has been cleared.';
    }
}

export default ClearCommand;
