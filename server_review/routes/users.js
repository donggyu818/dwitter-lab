import express from 'express';
import * as ucontroller from '../controller/usersController.js'

const router = express.Router();

router.post("/login", ucontroller.postLogin);
router.get("/", ucontroller.getUsers);

export default router;