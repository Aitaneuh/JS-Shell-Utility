import Command from './commands.js';

class FactorialCommand extends Command {
    constructor() {
        super('fact', 'Calculate the factorial n! of a number n. Usage: fact <number>', 'Input: fact 12\n\nOutput: The factorial of 12 is : 479001600');
    }

    execute(args) {
        if (args.length < 1) {
            return 'Error: A number is required.';
        }
        let n = parseInt(args[0]);
        if (isNaN(n)) {
            return 'Error: The argument needs to be numbers.';
        }
        let result = 1
        for (let i = n; i > 0; i--) {
            result *= i;
        }

        return `The factorial of ${n} is : ${result}`;
    }
}

export default FactorialCommand;
