const fs = require('fs');
const exec = require('child_process').exec;

function addAllFunctions(dirname) {
    fs.readdir(dirname, (err, filenames) => {
        if (err) return;
        filenames.map(filename => {
            const command = `npm run faas:add ${dirname + filename} ${filename.replace('.js', '')}`;
            const npmInstallProcess = exec(command);
            console.log(command);
            npmInstallProcess.stdout.on('data', function(data) {
                console.log(data);
            });
        });
    });
}

addAllFunctions("./functions/");
