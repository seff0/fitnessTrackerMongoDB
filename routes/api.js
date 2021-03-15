const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
	db.Workout.findAll({}, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.json(data);
		}
	});
});

router.put("/api/workouts/:id", (req, res) => {
	db.Workout.findOneAndUpdate(
		{ _id: req.params.id },
		{ $push: { exercises: body } },
		{ new: true }
	)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post("/api/workouts", (req, res) => {
	db.Workout.create(req.body)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
