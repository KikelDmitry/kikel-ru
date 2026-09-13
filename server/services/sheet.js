import { google } from "googleapis";
import { auth } from "./gapi.js";
import { genres } from "../../config/category.js";

export async function getMetadataSheet(category) {
	if (!genres[category]) return null;
	const sheets = google.sheets({ version: "v4", auth });
	const spreadsheetId = process.env.SHEETS_ID;
	const sheetRange = `${process.env.SHEETS_NAME}!${process.env.SHEETS_RANGE}`;


	// const fields = {
	// 	n: 0,
	// 	title: 1,
	// 	technique: 2,
	// 	dimensions: 3,
	// 	year: 6,
	// 	published: 9
	// }

	try {
		const resp = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range: sheetRange,
		});
		const filteredByCat = resp.data.values.filter((item) => {
			return !!item[9] && (item[4] === genres[category])
		})
		const result = [];

		for (let i = 0; i < filteredByCat.length; i++) {
			const item = filteredByCat[i];
			const picture = {
				n: item[0],
				title: item[1],
				technique: item[2].trim(),
				dimensions: item[3],
				genre: genres[category],
				year: item[6],
			};
			result.push(picture)
		}

		return result;

	} catch (err) {
		console.error("Error reading sheet:", err.message || err);
		return [];
	}
}