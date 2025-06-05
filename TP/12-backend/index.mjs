import express from 'express'
const app = express()
app.use(express.json())
const port = 3000
// imports des routes par module
import gamesRoutes from './routes/games.mjs'
import usersRoutes from './routes/users.mjs'

app.use('/games', gamesRoutes)
app.use('/users', usersRoutes)

app.get('/', (req, res) => {
  res.json('API pour notre app Vue-js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
