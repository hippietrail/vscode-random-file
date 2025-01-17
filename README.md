# Random File Extension for Visual Studio Code

## Overview
The **Random File** extension for Visual Studio Code allows you to quickly open a random file from the current workspace. Can be quite handy for exploring new projects.

## Features
- Open a random file from your workspace.
- Filter files by extensions.
- Excludes files in the `node_modules` directory.

## Usage
- After installing the extension, you can trigger the command by:
  - Opening the Command Palette (`Cmd+Shift+P` on macOS, `Ctrl+Shift+P` on Windows) and typing `Open a random File`.
  
## Configuration
You can customize the file extensions that the extension considers by adding the following configuration to your `settings.json`:

```json
"randomFile.extensions": [".md", ".txt"]
```

## License
This project is licensed under the MIT License.