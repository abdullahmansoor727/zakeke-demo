const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/syncProducts/", (req, res) => {
	if (req.query.page == 1)
		res.json([
			{
				code: "1343242",
				name: "Ford F450",
				thumbnail:
					"https://demo-dev.shaed.ai/cms/uploads/Ford_car1_9bc550001f.webp",
			},
			{
				code: "1343243",
				name: "Workhorse W4CC",
				thumbnail:
					"https://www.commercialevs.com/static/media/truck0.39702c7cf0485102534e.png",
			},
		]);
	res.json([]);
});

app.post("/syncProducts/:id/configurator", (req, res) => {
	res.send().status(200);
});
app.delete("/syncProducts/:id/configurator", (req, res) => {
	res.send().status(200);
});

app.get("/syncProducts/:id/options", (req, res) => {
	// if (req.query.page == 1)
	res.json([
		{
			code: "34523",
			name: "Color",
			values: [
				{
					code: "537564567",
					name: "Red",
				},
				{
					code: "646456464",
					name: "Blue",
				},
				{
					code: "646456423",
					name: "Black",
				},
				{
					code: "646456424",
					name: "Silver",
				},
				{
					code: "646456425",
					name: "Black2",
				},
				{
					code: "646456426",
					name: "White",
				},
			],
		},
	]);
	// res.json([]);
});
