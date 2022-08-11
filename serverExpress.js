const contenedor = require ("./Contenedor");
const express = require ('express');
const app = express();

const PORT = 8080;
const contenedor = new Contenedor ("productos.json")

app.get('/',(req,res)=>{
    res.send('hi express server!')
});

app.get('7porductos' ,async (req,res)=>{
    const allProducts = await contenedor.getAll();
    res.json(allProducts);

});

app.get('/productoRandom', async(req, res)=>{
    const allProducts= await contenedor.getAll();
    const maxID = allProducts.lenght;

    const randomNumber = generateRandomNumber (1, maxId),
    const randomProduct = await contenedor. getById(randomNumber);

    res.json(randomProduct);

})

app.get('/albums', (req, res)=>{
    res.send('Hi, you are at albums')
});

app.get('/object', (req, res) => {
    res.json({title: 'Are you experienced?', artist: 'The Jimi Hendrix Experience'})
});

const generateRandomNumber = (min, max) => {
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

const server = app.listen(PORT, () => {
    console.log(`>>>> Server started at http://localhost:${PORT}`)
})

server.on('error', (error) => console.log(error));

