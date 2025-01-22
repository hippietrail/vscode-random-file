# Random File Extension for Visual Studio Code

## Overview
The **Random File** extension for Visual Studio Code allows you to quickly open a random file from the current workspace. Can be quite handy for exploring new projects.

## Features
- Open a random file from your workspace.
- Filter files by extensions you can specify.
- Excludes files in directories you can also specify.

## Usage
- After installing the extension, you can trigger the command by:
  - Opening the Command Palette (`Cmd+Shift+P` on macOS, `Ctrl+Shift+P` on Windows) and typing `Open a random File`.
  
## Configuration
You can customize the file extensions that the are considered by modifying the `extensions` option in your `settings.json`:

```json
"randomFile.extensions": [".md", ".txt"]
```

And you can exclude directories by modifying the `excludeDirs` option in your `settings.json`:

```json
"randomFile.excludeDirs": ["node_modules"]
```

## License
This project is licensed under the MIT License.