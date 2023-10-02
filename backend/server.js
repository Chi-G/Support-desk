const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./Middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

//connect to database 
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to the Support Desk API'})
})

//Routes 
app.use('/api/users', require('./Routes/userRoutes'))
app.use('/api/tickets', require('./Routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
