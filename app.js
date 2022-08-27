const express = require('express')
const app = express()
const port = 3000


// HOME
// http://localhost:3000
// http://127.0.0.1:3000
app.get('/', (req, res) => {
  res.send('Hola desde mi primer servidor!')
})



app.get('/pokemon/:name?', (req, res) => {
    console.log(req.params);
    if(req.params.name) {
        res.send("Aquí te envio a: "+req.params.name)
    }else{
        res.send("Aquí te envío a todos los pokemon")
    }
  })
// :name significa que admite un parámetro variable. La ? significa que el parámetro es opcinal. Si no se pone, no encontrará la ruta.
// El condicional se hace para cuando no se escriba ningún parámetro, no te de "undefined"



app.get('/perritos', (req, res) => {
  res.send('Aquí te enviaría mis perritos!')
})

// req: Request (lo que se pide)
// res: Response (lo que se devuelve)



app.listen(port, () => {
  console.log(`El servidor funciona en el puerto ${port}`)
})