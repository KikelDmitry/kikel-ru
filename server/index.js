import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { genres, technique } from "../config/category.js";
import { getMetadataSheet } from "./services/sheet.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;


app.get("/pictures/:category", async (req, res) => {
	const category = req.params.category.toLowerCase();

	try {
		const sheet = await getMetadataSheet(category);

		res.json({
			category,
			count: sheet?.length,
			sheet,
		});

	} catch (err) {
		console.error("❌ /pictures error:", err);
		res.status(500).json({ error: "Server error" });
	}
});



app.get("/hero/slides", async (req, res) => {
	const slides = [
		{
			id: '12345-ac',
			url: '/mock-pic/186.jpg',
			dir: 'ltr',
			meta: {
				title: 'Морской пейзаж',
				category: 'seascape',
				tech: technique.hm,
			},
		},
		{
			id: 'fqwc-_ac',
			url: '/mock-pic/667.jpg',
			dir: 'rtl',
			meta: {
				title: 'Котик',
				year: 1996,
				category: 'Графика',
				tech: technique.plm
			},
		}
	];
	try {
		res.json({
			count: slides.length,
			slides
		})
	} catch (err) {
		console.error("/slides error:", err);
		res.status(500).json({ error: "Server error" });
	}
})

app.get("/categories", async (req, res) => {

	const categories = [];
	const extraCategories = [{
		alias: 'mural',
		title: 'Роспись',
	}, {
		alias: 'drawing',
		title: 'Рисунок',
	}, {
		alias: 'levkas',
		title: 'Левкас',
	}, {
		alias: 'photo',
		title: 'Фото',
	}];
	for (const alias in genres) {
		categories.push({
			alias,
			title: genres[alias]
		})
	}
	categories.push(...extraCategories);
	try {
		res.json(categories)
	} catch (err) {
		console.error('/categories error')
	}
})

app.listen(PORT, () =>
	console.log(`🚀 Server running on http://localhost:${PORT}`)
);