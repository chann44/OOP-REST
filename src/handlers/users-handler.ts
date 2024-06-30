import { Metrics } from "../metrics";
import { Response, Router } from "express";

export class UserHandler {
  private router: Router;
  private metrics: Metrics;

  constructor(router: Router, metrics: Metrics) {
    this.router = router;
    this.metrics = metrics;
    this.router.get("/users", this.getUsers.bind(this));
  }

  public async getUsers(_req: Request, res: Response) {
    try {
      this.metrics.users.inc();
      res.status(200).json("hello");
    } catch (e) {
      console.log(e);
    }
  }
}
