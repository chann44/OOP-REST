import "dotenv/config";

import { validateEnv } from "./core/utils";
import App from "./server";
import { Registry } from "prom-client";
import { Metrics } from "./metrics";
import { MetricsHandler } from "./matrics-handler";
import { UserHandler } from "./handlers/users-handler";
import { Router } from "express";

validateEnv();

const registry = new Registry();
const metrics = new Metrics(registry);
const router = Router();

const routes = [
  new UserHandler(router, metrics),
  new MetricsHandler(router, metrics),
];
const app = new App(routes);

app.listen();
