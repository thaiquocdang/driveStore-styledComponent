import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile) //middleware protect will run whenever we hit this route
  .put(protect, updateUserProfile) //put request use for the case of update profile

router.route('/:id').delete(protect, admin, deleteUser)

export default router
