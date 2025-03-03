import Command from './commands.js';

class VietasFormulaCommand extends Command {
    constructor() {
        super('vieta', 'Calculate the solution of a second degree equation using the vieta\'s formula. Usage: vieta <x squared> <x> <decimal>');
    }

    execute(args) {
        if (args.length < 3) {
            return 'Error: Three numbers are required.';
        }
        let number_of_x2 = (args[0]);
        let number_of_x = (args[1]);
        let number_of_decimal = (args[2]);
        if (isNaN(number_of_x2) || isNaN(number_of_x) || isNaN(number_of_decimal)) {
            return 'Error: The three arguments need to be numbers.';
        }

        let equation = `${number_of_x2}x² + ${number_of_x}x + ${number_of_decimal}\n`
        console.log(equation)
        let a = number_of_x2
        let b = number_of_x
        let c = number_of_decimal
        let discriminant = b * b - 4 * a * c
        let x = 0
        let x1 = 0
        let x2 = 0
        let msg = ''
        if (discriminant < 0) {
            console.log("S = impossible")
        } else if (discriminant > 0) {
            x1 = ((-1 * b + Math.sqrt(discriminant)) / (2 * a))
            x2 = ((-1 * b - Math.sqrt(discriminant)) / (2 * a))
            msg = `S = {${x1};${x2}}`
            console.log(msg)
        } else {
            x = b / (2 * a) * -1
            msg = `S = {${x}}`
            console.log(msg)
        }

        return '';
    }
}

export default VietasFormulaCommand;
