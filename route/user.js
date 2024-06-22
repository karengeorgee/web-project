import express from 'express';
import {
  createUser_post,
  getUsers_get,
  getUserById_get,
  updateUser_put,
  deleteUser_delete,
} from '../controller/user.js';

const router = express.Router();

router.post('/', createUser_post);
router.get('/', getUsers_get);
router.get('/:id', getUserById_get);
router.put('/:id', updateUser_put);
router.delete('/:id', deleteUser_delete);

export default router;
