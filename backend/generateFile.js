const fs = require("fs");
const path = require("path");

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, code) => {
  const fileName = `${format}-${Date.now()}.${format}`;
  const filePath = path.join(dirCodes, fileName);
  fs.writeFileSync(path.join(dirCodes, fileName), code);
  return filePath;
};

module.exports = { generateFile };
