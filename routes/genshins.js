import { Router } from 'express'
import * as genshinsCtrl from '../controllers/genshins.js'

const router = Router()

//GET localhost:3000/api/genshins
router.get('/',genshinsCtrl.index)

export {
  router
}
