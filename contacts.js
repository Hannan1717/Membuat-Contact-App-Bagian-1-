const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

// membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
   fs.mkdirSync(dirPath);
}

// membuat file contacts.json
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
   fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyan) => {
   return new Promise((resolve, reject) => {
      rl.question(pertanyan, (nama) => {
         resolve(nama);
      });
   });
};

const simpanContacts = (nama, email, noHp) => {
   const contact = { nama, email, noHp };
   const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
   const contacts = JSON.parse(fileBuffer);

   contacts.push(contact);

   fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

   console.log("data anda tersimpan");
   rl.close();
};

module.exports = { tulisPertanyaan, simpanContacts };
