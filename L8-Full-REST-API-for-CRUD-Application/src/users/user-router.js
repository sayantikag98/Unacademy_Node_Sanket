import express from "express";
import crudController from "./user-controller";

const router = express.Router();

router
.route("/")
.get(crudController.getAll)
.post(crudController.postNew)

router
.route("/:id")
.get(crudController.getById)
.patch(crudController.updateById)
.delete(crudController.deleteById);

export default router;