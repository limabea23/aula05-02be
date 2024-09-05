const filmesMarcantes = [
  {
    id: 1023,
    nome: "A Cinco Passos de Você",
    genero: "Drama",
    emCartaz: false,
  },
  {
    id: 1024,
    nome: "Viva! A vida é uma festa",
    genero: "Infantil/Fantasia",
    emCartaz: false,
  },
  {
    id: 1025,
    nome: "As Metas de Jessica Darling",
    genero: "Infantil/Comédia",
    emCartaz: false,
  },
];

app.get("/filmes", (req, res) => {
  return res.status(200).send(filmesMarcantes);
});
