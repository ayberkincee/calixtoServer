const dataDb = {
  //======================================================================
  //lo crea la app cuando la bd esta vacia
  //a futuro el owner los podrá modificar
  state: [
    { name: "disponible" },
    { name: "llegado" },
    { name: "agotado" },
    { name: "limitado" },
  ],

  tax: [
    { id: 1, tax: 0 },
    { id: 2, tax: 5 },
    { id: 3, tax: 8 },
    { id: 4, tax: 16 },
    { id: 5, tax: 19 },
  ],

  //======================================================================
  // lo debe crear Sthemma cuando crea el Owner en la plataforma SuperAdmin
  owner: [
    {
      id: 0,
      name: "Sthemma",
      password: "0",
      plan: 50,
      logoOwner:
        "https://res.cloudinary.com/sthemma/image/upload/v1687659529/calixto/logosProveedores/sthemma.jpg",
      sloganOwner: "Modelando el mundo",
      cardType: 2,
      llegado: 2,
    },
    {
      id: 1,
      name: "SF Group",
      password: "1",
      plan: 40,
      logoOwner:
        "https://res.cloudinary.com/sthemma/image/upload/v1687712049/calixto/logosProveedores/sfgroup.png",
      sloganOwner: "Come bien, siéntete bien",
      cardType: 2,
      llegado: 2,
    },
    {
      id: 2,
      name: "SFGroup",
      password: "2",
      plan: 30,
      logoOwner:
        // "https://candyjobs.com.co/wp-content/uploads/2020/10/0805-LOGO-GRECO.png",
        "https://res.cloudinary.com/sthemma/image/upload/v1687712049/calixto/logosProveedores/sfgroup.png",
      sloganOwner: "Toda una Galleta",
      cardType: 3,
    },
  ],

  //======================================================================
  //lo debe crear el owner desde su plataforma Admin
  icon: [
    {
      id: 1,
      name: "keto",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/keto-01_ehd6ot.jpg",
    },
    {
      id: 2,
      name: "vegano",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/vegan-01_ou8e0q.jpg",
    },
    {
      id: 3,
      name: "vegetariano",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/vegetarian-01_mwbbe1.jpg",
    },
    {
      id: 4,
      name: "aptoDiabetico",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/diabetic-01_atrz7u.jpg",
    },
    {
      id: 5,
      name: "altoProteina",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/protein-01_hueodb.jpg",
    },
    {
      id: 6,
      name: "sinGluten",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/gluten-01_wzsmvw.jpg",
    },
    {
      id: 7,
      name: "Xketo",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/xketo-01_fog2ok.jpg",
    },
    {
      id: 8,
      name: "Xvegano",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/xvegan-01_vmib0d.jpg",
    },
    {
      id: 9,
      name: "Xvegetariano",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/xvegetarian-01_ljtyfd.jpg",
    },
    {
      id: 10,
      name: "XaptoDiabetico",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/xdiabetic-01_tuzp9i.jpg",
    },
    {
      id: 11,
      name: "XaltoProteina",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/xprotein-01_z8rfa8.jpg",
    },
    {
      id: 12,
      name: "XsinGluten",
      iconUrl:
        "https://res.cloudinary.com/sthemma/calixto/iconos/xgluten-01_myropx.jpg",
    },
  ],

  canales: [
    { id: 1, name: "saludable" },
    { id: 2, name: "autoservicio" },
    { id: 3, name: "gym" },
    { id: 4, name: "cafesCow" },
    { id: 5, name: "horeca" },
    { id: 6, name: "licoStores" },
    { id: 7, name: "educacion" },
  ],

  user: [
    { id: 0, name: "Sthemma", password: "0" },
    { id: 1, name: "User1", password: "1" },
    { id: 2, name: "User2", password: "2" },
  ],

  portfolio: [
    { id: 1, name: "Todos" },
    { id: 2, name: "Aseo", priority: 2 },
    { id: 3, name: "Repuestos", priority: 1 },
    { id: 4, name: "Dulces" },
    { id: 5, name: "Alcoholicas" },
  ],
};

module.exports = { dataDb };
