const dataDb = 
{
  
    state: [
      {name: "disponible" },
      {name: "llegado" },
      {name: "agotado" },
      {name: "limitado" },
    ],
  
    icon: [
      {
        id: 1,
        name: "keto",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730194/calixto/Keto_bjwxe9.jpg",
      },
      {
        id: 2,
        name: "vegano",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730193/calixto/Vegan_niu9ta.jpg",
      },
      {
        id: 3,
        name: "vegetariano",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730193/calixto/Vegetarian_eys2s4.jpg",
      },
      {
        id: 4,
        name: "aptoDiabetico",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730194/calixto/Diabetic_ifjsmh.jpg",
      },
      {
        id: 5,
        name: "altoProteina",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730193/calixto/Protein_bdxjjk.jpg",
      },
      {
        id: 6,
        name: "sinGluten",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730194/calixto/Gluten_ubwtpz.jpg",
      },
      {
        id: 7,
        name: "Xketo",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730193/calixto/NoKeto_hlneqz.jpg",
      },
      {
        id: 8,
        name: "Xvegano",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730194/calixto/NoVegan_w55mxp.jpg",
      },
      {
        id: 9,
        name: "Xvegetariano",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730192/calixto/NoVegetarian_cbwq6b.jpg",
      },
      {
        id: 10,
        name: "XaptoDiabetico",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730193/calixto/NoDiabetic_m1usq2.jpg",
      },
      {
        id: 11,
        name: "XaltoProteina",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730193/calixto/NoProtein_gi6vs0.jpg",
      },
      {
        id: 12,
        name: "XsinGluten",
        iconUrl:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1685730193/calixto/NoGluten_abuhjs.jpg",
      },
    ],
  
    tax: [
      { id: 1, tax: 0 },
      { id: 2, tax: 5 },
      { id: 3, tax: 8 },
      { id: 4, tax: 16 },
      { id: 5, tax: 19 },
    ],
  
    user: [
      { id: 1, name: "Mati", password: "qwer" },
      { id: 2, name: "Juanfer", password: "qwer" },
      { id: 3, name: "Gabriel", password: "qwer" },
      { id: 4, name: "Juanpa", password: "qwer" },
      { id: 5, name: "Obama", password: "qwer" },
    ],
  
    owner: [
      {
        id: 1,
        name: "Sthemma",
        password: "qwer",
        plan: 50,
        logoOwner:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1684979344/calixto/Logo_huella_y52gwa.png",
        sloganOwner: "Modelando el mundo",
        cardType: 1,
      },
      {
        id: 2,
        name: "SF Group",
        password: "qwer",
        plan: 40,
        logoOwner:
          "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681872234/calixto/SFGroup_rz9wyr.jpg",
        sloganOwner: "Distribuyendo felicidad",
        cardType: 2,
      },
      {
        id: 3,
        name: "Grecco",
        password: "qwer",
        plan: 30,
        logoOwner:
          "https://candyjobs.com.co/wp-content/uploads/2020/10/0805-LOGO-GRECO.png",
        sloganOwner: "Toda una galleta",
        cardType: 3,
      },
      {
        id: 4,
        name: "Punto 4",
        password: "qwer",
        plan: 20,
        logoOwner: "",
        sloganOwner: "Catalogo del Punto 4",
        cardType: 1,
      },
      {
        id: 5,
        name: "Punto 5",
        password: "qwer",
        plan: 0,
        logoOwner: "",
        cardType: 2,
      },
    ],
  
    portfolio: [
      { id: 1, name: "Todos" },
      { id: 2, name: "Aseo", priority: 2 },
      { id: 3, name: "Repuestos", priority: 1 },
      { id: 4, name: "Dulces" },
      { id: 5, name: "Alcoholicas" },
    ],
  };

  module.exports={dataDb}