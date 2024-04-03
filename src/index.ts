import "dotenv/config";

import { validateEnv } from "./core/utils";
import App from "./server";
import { UserRoute } from "./user/user.route";

validateEnv();

const routes = [new UserRoute()];
const app = new App(routes);

app.listen();
