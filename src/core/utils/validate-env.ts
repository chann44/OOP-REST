import { cleanEnv, str, url } from "envalid";

export function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    DB_URI: url(),
  });
}
