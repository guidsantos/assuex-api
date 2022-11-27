import { Router } from "express";
import { CreateLineStopPointController } from "../services/LineStop/addLineStopPoint/CreateLineStopPointController";
import { CreateLineController } from "../services/Line/createLine/CreateLineController";
import { CreateStopPointController } from "../services/StopPoint/createStopPoint/CreateStopPointController";
import { DeleteLineStopPointController } from "../services/LineStop/deleteLineStopPoint/DeleteLineStopPointController";
import { GetAllLinesController } from "../services/Line/getAllLines/GetAllLinesController";
import { UpdateLineStopPointController } from "../services/LineStop/updateLineStopPoint/UpdateLineStopPointController";
import { UpdateLineController } from "../services/Line/updateLine/UpdateLineController";

const lineRoutes = Router();

const createLineController = new CreateLineController();
const updateLineController = new UpdateLineController();
const getAllLinesController = new GetAllLinesController();

const createStopPointController = new CreateStopPointController();

const createLineStopPointController = new CreateLineStopPointController();
const updateLineStopPointController = new UpdateLineStopPointController();
const deleteLineStopPointController = new DeleteLineStopPointController();

lineRoutes.post("", createLineController.handle);
lineRoutes.put("", updateLineController.handle);
lineRoutes.get("", getAllLinesController.handle);

lineRoutes.post("/stop-point", createStopPointController.handle);

lineRoutes.post("/stops", createLineStopPointController.handle);
lineRoutes.put("/stops", updateLineStopPointController.handle);
lineRoutes.delete("/stops", deleteLineStopPointController.handle);

export { lineRoutes };
