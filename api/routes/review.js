import express from "express";
import { addreview, viewreview } from "../controllers/review.js";

const router = express.Router();

router.post('/:hotelid/:userid', addreview);

router.get('/:id', viewreview)

export default router;
