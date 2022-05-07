
const express = require('express');
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
app.use(express.json());

var fs = require("fs");
var jsonData;

fs.readFile("frases.json" , "utf8", function(err, data){
  if(err){
    return console.log("Erro ao ler arquivo");
  }

  jsonData = JSON.parse(data); // faz o parse para json
 
  console.log(jsonData);

})


app.get('/allFrases', (req, res) => res.json(jsonData));

app.get('/', (req,res)=>{
  res.send("Funfando");
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('To shutdown the server: ctrl + c');
})