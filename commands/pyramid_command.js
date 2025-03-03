import Command from './commands.js';

class PyramidCommand extends Command {
    constructor() {
        super('pyra', 'Draw a squared pyramid of a length n. Usage: pyra <number> ');
    }

    execute(args) {
        if (args.length < 1) {
            return 'Error: A number is required.';
        }
        let n = parseInt(args[0]);
        if (isNaN(n)) {
            return 'Error: The argument needs to be numbers.';
        }
        for (let row = 0; row < n; row++) {
            let line = ""
            for (let space = n; space > row; space--) {
                line += " "
            }
            for (let star = 0; star < row + 1; star++) {
                line += "* "
            }
            console.log(line)
        }

        return ``;
    }
}

export default PyramidCommand;
