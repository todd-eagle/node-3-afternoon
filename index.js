require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const prod_ctrl = require('./products_controller')
const  {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
   
}).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(e => console.log(e))

app.post('/api/products', prod_ctrl.create)
app.get('/api/products', prod_ctrl.getAll)
app.get('/api/products/:id', prod_ctrl.getOne)
app.put('/api/products/:id', prod_ctrl.update)
app.delete('/api/products/:id', prod_ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))
