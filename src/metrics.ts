import { Counter, Registry, collectDefaultMetrics } from "prom-client";

export class Metrics {
  public registry: Registry;

  public users: Counter;

  constructor(registry: Registry) {
    this.registry = registry;

    collectDefaultMetrics({
      register: this.registry,
    });

    this.users = new Counter({
      name: "users",
      help: "Users count",
      registers: [this.registry],
    });

    this.registry.registerMetric(this.users);
  }
}

export * from "prom-client";
