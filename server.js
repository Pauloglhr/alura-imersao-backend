import express from 'express';

const app = express();
app.listen(3000, ()=> {
    console.log("Executando o servidor..");
});
app.get('/api', (req, res)=> {
    res.status(200).send("Enviando dados à api.");
});