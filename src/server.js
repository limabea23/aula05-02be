import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const guloseimas = [
    {
        id: 1,
        nome: "Trufa",
        preco: 8.50, 
    },
    {
        id: 2,
        nome: "Jujuba",
        preco: 24.90,
    },
    {
        id: 3,
        nome:"Marshmellow",
        preco: 18.33,
    }
]

const filmesMarcantes = [
    {
        id: 1023,
        nome: "A Cinco Passos de Você",
        genero: "Drama",
        emCartaz: false
    },
    {
        id: 1024,
        nome: "Viva! A vida é uma festa",
        genero: "Infantil/Fantasia",
        emCartaz: false
    },
    {
        id: 1025,
        nome: "As Metas de Jessica Darling",
        genero: "Infantil/Comédia",
        emCartaz: false
    },
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
})

app.get("/doces", (req, res) => {
    return res.status(200).send(guloseimas)
})
app.post("/doces", (req, res) => {
    const {nome, preco} = req.body

    const novoDoce = {
        id: guloseimas.length + 1, 
        nome: nome, 
        preco: preco,
    }

    guloseimas.push(novoDoce)
    
    return res.status(200).send(guloseimas)
})

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})

app.post("/2tds1", (req, res) => {
    return res.status(333).send({ message: "Hello, 2TDS1 - só os dev!"})
})

app.listen(port, () => {
    console.log(`🤠 Server started on http://localhost:${port}`)
})