import Command from './commands.js';

class BCDCommand extends Command {
    constructor() {
        super('bcd', 'Calculate the biggest common divider between two numbers. Usage: bcd <number1> <number2>', 'Input: bcd 64 24\n\nOutput: The BCD between 64 and 24 is : 8');
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
        let bcd = null;

        let i = 1;
        while (bcd === null) {
            result1.push(number1 / i);
            result2.push(number2 / i);

            result1.forEach((item) => {
                if (result2.includes(item)) {
                    bcd = item;
                }
            });
            i++;
        }

        return `The BCD between ${number1} and ${number2} is : ${bcd}`;
    }
}

export default BCDCommand;
