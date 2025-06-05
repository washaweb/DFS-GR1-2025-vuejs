const getItems = (req, res) => {
  res.json('Ici la liste des users !')
}
const getItem = (req, res) => {
  // console.log(req)
  res.json('Ici la vue d\'un user !' + req.params.id)
}
const patchItem = (req, res) => {
  // console.log(req)
  res.json('Ici modification d\'un user !' + req.params.id)
}
const postItem = (req, res) => {
  // console.log(req)
  res.json('creation d\'un user !')
}
const deleteItem = (req, res) => {
  // console.log(req)
  res.json('Suppression d\'un user !')
}


export { getItems, getItem, patchItem, postItem, deleteItem }