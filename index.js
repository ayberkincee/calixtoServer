const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT_SERVER = process.env.PORT || 3003;
const SERVER_URL = process.env.SERVER_URL; //http://localhost:3003/createowner

// Syncing all the models at once.
// conn.sync({ force: true }).then( async() => {
conn.sync({ alter: true }).then( async() => {
  server.listen(PORT_SERVER, () => {
    console.log(`server listening at ${PORT_SERVER}`); // eslint-disable-line no-console
  });

//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//         id: 0,
//         name: "Sthemma",
//         password: 0,
//         plan: 50,
//         logoOwner:
//           "https://res.cloudinary.com/sthemma/calixto/LogoSthemma_pfz4fs.jpg",
//         sloganOwner: "Modelando el Mundo",
//         cardType: 1,
//     }),
//   };
//   await fetch(SERVER_URL, options);
});
