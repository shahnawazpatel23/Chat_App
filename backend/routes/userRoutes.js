// import express from "express";
// import usermiddleware from "../middleware/user.middleware.js";
// import {getUsersForSidebar} from "../controllers/users.controller.js";

// const router= express.Router();

// router.get('./users',usermiddleware,getUsersForSidebar);

// export default router;


import express from "express";
import usermiddleware from "../middleware/user.middleware.js";
import { getUsersForSidebar } from "../controllers/users.controller.js";
// import usermiddleware from "../middleware/user.middleware.js";

const router = express.Router();

router.get("/", usermiddleware, getUsersForSidebar);

export default router;