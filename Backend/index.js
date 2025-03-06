import express from "express";
import { exec } from "child_process";
import cors from "cors";


 const app = express();
app.use(cors());

app.get("/run_python", (req, res) => {
  exec("python patton.py", (error, stdout, stderr) => {
    if (error) {
      return res.send(`Error: ${error.message}`);
    }
    if (stderr) {
      return res.send(`Error: ${stderr}`);
    }
    res.send(stdout);
  });
});

app.listen(5000, () => {

  console.log("SERVER IS RUNNING ON PORT 5000...");
});
