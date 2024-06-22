import { type Request, type Response } from "express";

import { STATUS } from "@/core/utils/status";
import { ERROR_MESSAGE } from "@/core/utils/erro-message";
import { userScheam } from "@/types";
import { UserService } from "@/user/user.service";
import { EmailService } from "@/services/email-service";

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

  async getUser(_: Request, res: Response) {
    try {
      new EmailService("44chansw@gmail.com");

      res.status(STATUS.OK);
      res.json({
        data: "Hello",
        error: null,
      });
    } catch (e) {
      console.log(e);
      res.status(STATUS.INTERNAL_SERVER);
      res.json(ERROR_MESSAGE.INTERNAL_SERVER);
    }
  }
}
