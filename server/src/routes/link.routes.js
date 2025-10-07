// /server/src/routes/link.routes.js

const { Router } = require("express");
const linkController = require("../controllers/link.controller.js");

const router = Router();

router.post("/links", linkController.createLink);
router.get("/links", linkController.getAllLinks);
router.get("/links/:id", linkController.getLinkById);
router.put("/links/:id", linkController.updateLink);
router.delete("/links/:id", linkController.deleteLink);

module.exports = router;
