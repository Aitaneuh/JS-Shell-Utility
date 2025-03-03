import Command from './commands.js';

class FactorialCommand extends Command {
    constructor() {
        super('fact', 'Calculate the factorial n! of a number n. Usage: fact <number> ');
    }

    execute(args) {
        if (args.length < 1) {
            return 'Error: A numbers is required.';
        }
        let n = parseInt(args[0]);
        let result = 1
        for (let i = n; i > 0; i--) {
            result *= i;
        }

        return `The factorial of ${n} is : ${result}`;
    }
}

export default FactorialCommand;
