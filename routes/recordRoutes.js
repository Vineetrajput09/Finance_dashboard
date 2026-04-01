const express = require("express");
const router = express.Router();

const recordController = require("../controllers/recordController");
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

router.post("/", protect, allowRoles("admin"), recordController.createRecord);
router.get("/", protect, allowRoles("viewer", "analyst", "admin"), recordController.getRecords);
router.put("/:id", protect, allowRoles("admin"), recordController.updateRecord);
router.delete("/:id", protect, allowRoles("admin"), recordController.deleteRecord);

module.exports = router;