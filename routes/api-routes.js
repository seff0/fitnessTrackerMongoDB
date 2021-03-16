const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
	db.Workout.findAll({}, (err, data) => {
		if (err) throw err;
		res.json(data);
	});
});

router.put("/api/workouts/:id", (req, res) => {
	db.Workout.findOneAndUpdate(
		{ _id: req.params.id },
		{ $push: { exercises: req.body } },
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

router.get("/api/workouts/range", (req, res) => {
	db.Workout.findAll(
		{ day: { $gte: query.start, $lte: query.end } },
		(err, data) => {
			if (err) throw err;
			res.json(data);
		}
	);
});

module.exports = router;
