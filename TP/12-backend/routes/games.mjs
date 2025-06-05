import express from 'express'
const router = express.Router()
import * as ctrl from '../controllers/games.mjs'
router.get('/', (req, res) => ctrl.getItems(req, res) )
router.get('/:id', (req, res) => ctrl.getItem(req, res))
router.delete('/:id', (req, res) => ctrl.deleteItem(req, res))
router.patch('/:id', (req, res) => ctrl.patchItem(req, res))
router.post('/', (req, res) => ctrl.postItem(req, res))

export default router