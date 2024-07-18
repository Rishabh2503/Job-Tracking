import  { Router} from "express"
const router  = Router()

import { getAllJobs, getJob, createJob, updateJob, deleteJob } from "../controllers/jobControllers.js";

// Method 1
// router.get("/",getAllJobs)
// router.post("/",createJobs)
// Method 2
router.route('/').get(getAllJobs).post(createJob)

router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)

export default router;