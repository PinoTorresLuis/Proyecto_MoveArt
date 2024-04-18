import {Router} from 'express';
import { sendForm } from '../controllers/form.controller.js';

const formRouter = Router();

formRouter.post('/enviarFormulario',sendForm);

export default formRouter