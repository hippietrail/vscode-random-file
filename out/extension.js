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
            const selectedFile = eligible[Math.floor(Math.random() * eligible.length)];
            const doc = await vscode.workspace.openTextDocument(selectedFile);
            await vscode.window.showTextDocument(doc);
        }
    } catch (error) {
        vscode.window.showErrorMessage('An error occurred while trying to open a random file.');
    }
}

async function randomTab() {
    try {
        const tabGroups = vscode.window.tabGroups;
        if (tabGroups.all.length > 0) {
            const g = Math.floor(Math.random() * tabGroups.all.length);
            const tabGroup = tabGroups.all[g];

            if (tabGroup.tabs.length > 0) {
                // Filter out tabs with null or undefined inputs
                const validTabs = tabGroup.tabs.filter(tab => {
                    const input = tab.input;
                    return input !== null && input !== undefined;
                });

                if (validTabs.length > 0) {
                    const randomIndex = Math.floor(Math.random() * validTabs.length);
                    const selectedTab = validTabs[randomIndex];
                    const tabInput = selectedTab.input;

                    if (tabInput?.uri) {
                        await vscode.window.showTextDocument(tabInput, { viewColumn: tabGroup.viewColumn });
                    }
                }
            }
        }
    } catch (error) {
        vscode.window.showErrorMessage('An error occurred while trying to switch to a random tab.');
    }
}

exports.activate = (context) => {
    console.log('Extension activating...');
    context.subscriptions.push(vscode.commands.registerCommand('extension.randomFile', randomFile));
    context.subscriptions.push(vscode.commands.registerCommand('extension.randomTab', randomTab));
    console.log('Extension activated successfully');
};

exports.deactivate = () => {
    console.log('Extension deactivating...');
}
