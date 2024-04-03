import { Route } from "@/core/interface";
import express, { type Application } from "express";
import hpp from "hpp";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "@/middleware/error.middleware";
import { DbService } from "./db/db-service";

export default class App {
  public app: Application;
  public port: string | number;
  public production: boolean;
  public db: DbService;

  constructor(routes: Route[]) {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.db = new DbService();
    this.production = process.env.NODE_ENV == "production" ? true : false;

    this.initializeMiddleware();
    this.initializeRoutes(routes);
    this.initializeErrorMiddleware();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("=====================================");
      console.log(`Sever is listening on port ${this.port}`);
      console.log("=====================================");
    });
  }
  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private initializeMiddleware() {
    if (this.production) {
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(morgan("combined"));
      this.app.use(
        cors({ origin: "your.domain.com", optionsSuccessStatus: 200 })
      );
    } else {
      this.app.use(morgan("dev"));
      this.app.use(cors({ origin: true, optionsSuccessStatus: 200 }));
    }

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeErrorMiddleware() {
    this.app.use(errorMiddleware);
  }
}
