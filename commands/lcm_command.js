import Command from './commands.js';

class LCMCommand extends Command {
    constructor() {
        super('lcm', 'Calculate the lowest common between to numbers. Usage: lcm <number1> <number2>');
    }

    execute(args) {
        if (args.length < 2) {
            return 'Error: Two numbers are required.';
        }
        let number1 = parseInt(args[0]);
        let number2 = parseInt(args[1]);
        if (isNaN(number1) || isNaN(number2)) {
            return 'Error: The two arguments need to be numbers.';
        }

        let result1 = [];
        let result2 = [];
        let lcm = null;
        let i = 1;

        while (lcm === null) {
            result1.push(number1 * i);
            result2.push(number2 * i);

            result1.forEach((item) => {
                if (result2.includes(item)) {
                    lcm = item;
                }
            });
            i++;
        }

        return `The LCM between ${number1} and ${number2} is : ${lcm}`;
    }
}

export default LCMCommand;
