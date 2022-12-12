import { Router } from "express";

import { userRoutes } from "./modules/User/routes";
import { lineRoutes } from "./modules/Lines/routes";
import { authRoutes } from "./modules/Authenticate/routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/authentication", authRoutes);
routes.use("/line", lineRoutes);

export { routes };
