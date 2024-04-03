import { type Router } from "express";

export interface Route {
  path: String;
  router: Router;
}
