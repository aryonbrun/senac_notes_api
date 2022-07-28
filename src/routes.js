import { Router } from "express";
import UserController from './app/comtrolers';

const routes = new Router();


// user controller

routes.post('/user/store'. UserController.store);

export default routes;