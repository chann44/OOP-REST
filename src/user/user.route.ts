import { Route } from "@/core/interface";
import { Router } from "express";

export class UserRoute implements Route {
  public path = "/user";
  public router = Router();
}
