import { Request, Response, Router } from "express";
import { Metrics } from "./metrics";

export class MetricsHandler {
  public metrics: Metrics;
  public router: Router;

  constructor(router: Router, metrics: Metrics) {
    this.router = router;
    this.metrics = metrics;
    this.router.get("/metrics", this.getMetrics.bind(this));
  }

  public async getMetrics(_req: Request, res: Response) {
    res.setHeader("Content-Type", this.metrics.registry.contentType);
    const mets = await this.metrics.registry.metrics();
    res.send(mets);
  }
}
