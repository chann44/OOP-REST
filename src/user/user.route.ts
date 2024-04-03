import { Router } from "express";

import { Route } from "@/core/interface";
import { UserController } from "@/user/user.controller";

export class UserRoute implements Route {
  public path = "/users";
  public router = Router();

  public userController = new UserController();

  constructor() {
    this.intiRoute();
  }

  private intiRoute() {
    this.router.post(this.path, this.userController.createUser);
  }
}
