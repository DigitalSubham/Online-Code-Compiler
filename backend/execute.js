const { exec } = require("child_process");

const executeCode = (filePath) => {
  // const jobId = path.basename(filePath).split(".")[0];
  return new Promise((resolve, reject) => {
    exec(`node ${filePath} `, (error, stdout, stderr) => {
      //   console.log("stderr", stderr);
      //   console.log("stdout", stdout);
      error && reject(error, stderr);
      stderr && reject(stderr);
      resolve(stdout);
    });
  });
};

module.exports = { executeCode };
