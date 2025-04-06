# Random File Extension for Visual Studio Code

## Overview
The **Random File** extension for Visual Studio Code allows you to quickly open a random file from the current workspace or switch to a random open tab. Perfect for exploring new projects or switching between open files.

## Features
- Open a random file from your workspace
- Switch to a random open tab
- Filter files by extensions
- Exclude specific directories

## Usage
- Open a random file: `Cmd+Shift+P` → `Open a random File`
- Switch to a random tab: `Cmd+Shift+P` → `Switch to random tab`

## Configuration
Configure file extensions to consider:

```json
"randomFile.extensions": [".rs", ".md"]
```

Exclude specific directories:

```json
"randomFile.excludeDirs": ["node_modules"]
```

## License
This project is licensed under the MIT License.