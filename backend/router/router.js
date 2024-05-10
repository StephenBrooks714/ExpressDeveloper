const express = require("express");
const router = express.Router();
const cache = require("../config/cache");

const homePageController = require("../controllers/homePage");
const sendFormController = require("../controllers/sendContactForm");
const thankYouController = require("../controllers/thankYouPage");
const aboutController = require("../controllers/aboutPage");
// projects
const projectsPageController = require("../controllers/projectsPage");

router.get("/", cache(2), homePageController);
router.post("/send/form", sendFormController);
router.get("/thankYou", thankYouController);
router.get("/about", aboutController);
// projects
router.get("/projects", cache(2), projectsPageController);

module.exports = router;