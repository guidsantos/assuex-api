import { Router } from "express";
import { CreateLineStopController } from "../services/addLineStopPoints/CreateLineStopController";
import { CreateLineController } from "../services/createLine/CreateLineController";
import { CreateStopPointController } from "../services/createStopPoint/CreateStopPointController";

const lineRoutes = Router();

const createLineController = new CreateLineController();
const createStopPointController = new CreateStopPointController();
const createLineStopController = new CreateLineStopController();


lineRoutes.post("", createLineController.handle);
lineRoutes.post("/stop-point", createStopPointController.handle);
lineRoutes.post("/stops", createLineStopController.handle)

export { lineRoutes };
