const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("pasta criada com sucesso");
});

fs.writeFile(
  path.join(__dirname, "teste", "teste.txt"),
  "hello node! ",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    return console.log("Arquivo criado com sucesso!");
  }
);

fs.appendFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello word!",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo mofificado com sucesso");
  }
);

fs.readFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", erro);
    }
    console.log(data);
  }
);
