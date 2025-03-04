class Command {
    constructor(name, description, example) {
        this.name = name;
        this.description = description;
        this.example = example;
    }

    execute(args) {
        throw new Error('execute(args) needs to be implemented.');
    }
}

export default Command;