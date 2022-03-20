import { Router } from 'express'
import * as genshinsCtrl from '../controllers/genshins.js'

const router = Router()

//GET localhost:3000/api/genshins
router.get('/',genshinsCtrl.index)

//create
router.post('/', genshinsCtrl.create)

//update
router.put('/:id',genshinsCtrl.update)

//delete
router.delete('/:id',genshinsCtrl.delete)

//show
router.get('/:id', genshinsCtrl.show)


export {
  router
}
