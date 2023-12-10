const express = require("express");
const app = express();
const { generateFile } = require("./generateFile");
const { executeCode } = require("./execute");
const cors = require("cors");

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  if (code === undefined) {
    return res.status(400).json({ success: false, error: "No code provided" });
  }

  try {
    //need to generate a c++ file with content from the request
    const filePath = await generateFile(language, code);

    //need to run the file and send the response
    const result = await executeCode(filePath);

    console.log(req.body);
    return res.json({ language, code, filePath, result });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
