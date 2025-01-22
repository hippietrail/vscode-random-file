"use strict";

const vscode = require('vscode');

async function randomFile() {
    try {
        const allFiles = await vscode.workspace.findFiles('**/*');
        const exts = vscode.workspace.getConfiguration().get('randomFile.extensions', []);
        const excludeDirs = vscode.workspace.getConfiguration().get('randomFile.excludeDirs', []);
        
        const sift = (ele) => {
            if (excludeDirs.some(dir => ele.path.includes(dir))) return false;
            const ext = ele.path.substring(ele.path.lastIndexOf('.'));
            if (!exts.includes(ext)) return false;
            if (exts.length === 0) return true;
            return exts.some(path => ele.path.includes(path));
        };

        const eligible = allFiles.filter(sift);

        if (eligible.length > 0) {
            await vscode.window.showTextDocument(await vscode.workspace.openTextDocument(eligible[Math.floor(Math.random() * eligible.length)]));
        }
    } catch (error) {
        console.error(error);
        vscode.window.showErrorMessage('An error occurred while trying to open a random file.');
    }
}

exports.activate = function (context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.randomFile', randomFile));
};

exports.deactivate = function () { }
