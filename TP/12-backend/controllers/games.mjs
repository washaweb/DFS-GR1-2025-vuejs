const getItems = (req, res) => {
  res.json('Ici la liste des jeux !')
}
const getItem = (req, res) => {
  // console.log(req)
  res.json('Ici la vue d\'un jeu !' + req.params.id)
}
const patchItem = (req, res) => {
  // console.log(req)
  res.json('Ici modification d\'un jeu !' + req.params.id)
}
const postItem = (req, res) => {
  // console.log(req)
  res.json('creation d\'un jeu !')
}
const deleteItem = (req, res) => {
  // console.log(req)
  res.json('Suppression d\'un jeu !')
}


export { getItems, getItem, patchItem, postItem, deleteItem }