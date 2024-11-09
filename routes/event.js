const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const userlikeeventController = require("../controllers/userlikeeventController");
const upload = require("../middleware/uploadMiddleware");
const {verifyToken, verifyUserIsEventCreator} = require("../middleware/authMiddleware");

router.get('', eventController.getAllEvents);

router.post('/new', verifyToken, eventController.addEvent);

router.put('/update/:event_id', verifyUserIsEventCreator, eventController.updateEvent);

router.delete('/delete/:event_id', verifyUserIsEventCreator, eventController.deleteEvent);

router.get('/:event_id', verifyToken, eventController.getEventById);

router.get('/:event_id/send_image', verifyUserIsEventCreator, (req, res) => {res.render('send_image.pug')});

router.post('/:event_id/send_image', verifyUserIsEventCreator, upload.single('image'), eventController.uploadEventImage);

router.get('/:event_id/get_image', verifyToken, eventController.getImage);

router.post('/:event_id/like', verifyToken, userlikeeventController.likeEvent);

router.post('/:event_id/unlike', verifyToken, userlikeeventController.unlikeEvent);

router.get('/:event_id/likes', verifyToken, userlikeeventController.getUsersWhoLikedEvent);

module.exports = router;