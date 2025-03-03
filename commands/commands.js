class Command {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    execute(args) {
        throw new Error('execute(args) needs to be implemented.');
    }
}

export default Command;