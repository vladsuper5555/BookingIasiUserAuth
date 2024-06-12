var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(async function (err) {
  if (err) throw err;
  console.log("Connected!");

  try {
    await queryAsync(con, `DROP DATABASE IF EXISTS BookingIasi`);
    console.log("Database dropped.");

    await queryAsync(con, `CREATE DATABASE IF NOT EXISTS BookingIasi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    console.log("Database created.");

    con.end();

    var conDB = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "BookingIasi",
    });

    conDB.connect(async function (err) {
      if (err) throw err;
      console.log("Connected to BookingIasi!");

      let createTableSql = `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        givenName VARCHAR(255),
        familyName VARCHAR(255),
        password TEXT NOT NULL,
        username TEXT,
        birthDate DATE,
        height DECIMAL(5, 2),
        weight DECIMAL(5, 2),
        gender ENUM('male', 'female', 'other'),
        needsSpecialAssistance BOOLEAN,
        userAgreedToFetchData BOOLEAN NOT NULL,
        activityIndex DECIMAL(10, 2)
      );`;

      await queryAsync(conDB, createTableSql);


      await queryAsync(conDB, createTableAtractii);

      conDB.end();
    });
  } catch (err) {
    console.error(err);
  }
});

function queryAsync(con, sql, params = []) {
  return new Promise((resolve, reject) => {
    con.query(sql, params, function (err, result) {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
