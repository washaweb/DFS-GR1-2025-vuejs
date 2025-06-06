import fs from 'fs'

const getItems = async (req, res) => {
  try {
    // récupération des données depuis le fichier JSON
    const data = await fs.promises.readFile('./db/users.json', 'utf8')
    // conversion des données en objet JSON
    const list = JSON.parse(data)
    // ici on pourrait écrire des fonctions de vérification ou de traitement des données
    //...
    // puis on renvoie la liste des utilisateurs
    res.json(list)
    // possibilité de renvoyer plusieurs types de données
    // res.json({ list })
    // res.send('texte ou données')
    // res.sendStatus(200)
    // res.status(200).send('texte ou données') 

  } catch (err) {
    // en cas d'erreur, on renvoie un message d'erreur
    console.log(err)
    res.status(500).send('Error reading file')
  }
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