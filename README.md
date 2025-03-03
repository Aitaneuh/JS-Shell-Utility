# JS-Shell-Utility

JS-Shell-Utility is a customizable JavaScript-based shell utility that allows users to execute predefined commands in a console-like environment. This tool is designed to facilitate the creation and management of custom shell commands using JavaScript.

## Features

- **Modular Command Structure**: Easily add or remove commands by creating individual command modules.
- **Command Handler**: Manages the execution and integration of various commands.
- **Interactive Console**: Provides a prompt (`>`) for users to input commands and receive immediate feedback.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Aitaneuh/JS-Shell-Utility.git
   cd JS-Shell-Utility
   ```

2. **Install dependencies**:

   If there are any dependencies, install them using npm or yarn.

   ```bash
   npm install
   # or
   yarn install
   ```

### Usage

1. **Add Commands**:

   Create your custom command modules in the `commands` directory. Each command should be a class extending the base `Command` class.

2. **Run the Shell**:

   Execute the main script to start the interactive shell.

   ```bash
   node main.js
   ```

3. **Execute Commands**:

   At the prompt (`>`), type your command followed by any necessary parameters. For example:

   ```bash
   > help
   ```

## Project Structure

```
JS-Shell-Utility/
│
├── commands/
│   ├── help_command.js
│   └── [your_custom_command].js
│
├── command_handler.js
├── main.js
└── README.md
```

- **`commands/`**: Directory containing individual command modules.
- **`command_handler.js`**: Manages the loading and execution of commands.
- **`main.js`**: Entry point for the interactive shell.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Inspired by various JavaScript shell utilities and command-line tools.