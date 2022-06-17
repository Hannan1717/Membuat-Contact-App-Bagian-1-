const { tulisPertanyaan, simpanContacts } = require("./contacts");

const main = async () => {
   const nama = await tulisPertanyaan("Masukkan Nama : ");
   const email = await tulisPertanyaan("Masukkan email : ");
   const noHp = await tulisPertanyaan("Masukkan Nohp : ");

   simpanContacts(nama, email, noHp);
};

main();

// const pertanyaan2 = () => {
//    return new Promise((resolve, reject) => {
//       rl.question("Masukkkan email : ", (email) => {
//          resolve(email);
//       });
//    });
// };

// rl.question("Masukkkan nama : ", (nama) => {
//    rl.question("Masukkan no Hp : ", (noHp) => {
//       const contact = { nama, noHp };
//       const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
//       const contacts = JSON.parse(fileBuffer);

//       contacts.push(contact);

//       fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

//       console.log("data anda tersimpan");
//       rl.close();
//    });
// });
