const express = require('express');

const app  = express();
const port = 5000;

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/about', (req,res)=>{
    res.sendFile(__dirname + '/public/about.html')
});
app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + '/public/contact.html')
})

app.get('/services', (req,res)=>{
    res.sendFile(__dirname + '/public/services.html')
})
app.get('*', (req,res)=>{
    res.send('404 | Page not found')
});

app.listen(port, ()=>{
    console.log(`Example app listen at http://localhost:${port}`)
})