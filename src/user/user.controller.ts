import { type Request, type Response } from "express";

import { STATUS } from "@/core/utils/status";
import { userScheam } from "@/types";

import { UserService } from "@/user/user.service";

export class UserController {
  public userService = new UserService();

  async createUser(req: Request, res: Response) {
    try {
      const user = userScheam.parse(req.body);
      const userResponse = await this.userService.createUser(user);
      res.status(STATUS.OK);
      res.json({
        data: userResponse,
        error: null,
      });
    } catch (e) {
      res.status(400);
      res.json({
        data: null,
        err: {
          message: "",
        },
      });
    }
  }
}
