import express from 'express'
const app = express()
app.use(express.json())
const port = 3000
// imports des routes par module
import gamesRoutes from './routes/games.mjs'
import usersRoutes from './routes/users.mjs'

// CORS simple (pour le développement)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use('/games', gamesRoutes)
app.use('/users', usersRoutes)

app.get('/', (req, res) => {
  res.json('API pour notre app Vue-js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
