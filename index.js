console.log("Starting Calixto");

const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT_SERVER = process.env.PORT || 3003;

// Syncing all the models at once.
// conn.sync({ alter: true }).then(() => {
// conn.sync({ force: true }).then(() => {
conn.sync({ force: false }).then(() => {
  server.listen(PORT_SERVER, () => {
    console.log(`server listening at ${PORT_SERVER}`); // eslint-disable-line no-console
  });
});
