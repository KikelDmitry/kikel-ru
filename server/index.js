import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from 'node:path';
import { CONFIG } from '../config/global.js'
import { genres, technique } from "../config/category.js";
import { getMetadataSheet } from "./services/sheet.js";
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
// hack
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/pictures/:category", async (req, res) => {
	const category = req.params.category.toLowerCase();
	const isCategoryMatched = Object.getOwnPropertyNames(genres).includes(category);

	if (!isCategoryMatched) res.status(404);

	try {
		const pictures = await getMetadataSheet(category);

		res.json({
			category,
			count: pictures?.length,
			pictures,
		});

	} catch (err) {
		console.error("❌ /pictures error:", err);
		res.status(500).json({ error: "Server error" });
	}
});

app.use('/images', express.static(path.join(__dirname, '../images')));

// app.use('/', (req, res) => {
// 	res.sendFile(path.join('/home/renton/development/kikel-ru/client/index.html'))
// });

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
	for (const alias in genres) {
		categories.push({
			alias,
			title: genres[alias]
		})
	}
	
	try {
		res.json(categories)
	} catch (err) {
		console.error('/categories error')
	}
})

app.listen(PORT, () =>
	console.log(`🚀 Server running on http://localhost:${PORT}`)
);