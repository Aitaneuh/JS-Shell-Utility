import Command from './commands.js';

class FactorialCommand extends Command {
    constructor() {
        super('fibo', 'Calculate the Fibonacci sequence until n. Usage: fibo <number> ');
    }

    execute(args) {
        if (args.length < 1) {
            return 'Error: A number is required.';
        }
        let n = 1;
        let lastN = 0;
        let res = 0;
        let maxList = parseInt(args[0]);
        let msg = "";
        console.log("Fibonacci number 0 : 0");
        console.log("Fibonacci number 1 : 1");
        for (let i = 0; i < maxList - 1; i++) {
            res = n + lastN
            lastN = n
            n = res
            msg = (`Fibonacci number ${i + 2} : ${res}`);
            console.log(msg)
        }

        return '';
    }
}

export default FactorialCommand;
