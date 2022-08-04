const { db } = require("./pgAdaptor");

db.one("select * from todos").then((res) => {
  console.log(res);
});
