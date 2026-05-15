import { Router } from "express";
import { router as V1Routes } from "./v1/index.js";
import { router as V2Routes } from "./v2/index.js";

export const router = Router()

router.use("/v1", V1Routes);
router.use("/v2", V2Routes);