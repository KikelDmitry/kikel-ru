import { google } from "googleapis";
import { auth } from "./gapi.js";

const drive = google.drive({ version: "v3", auth });

async function getStartToken() {
	const res = await drive.changes.getStartPageToken();
	return res.data.startPageToken;
}

async function getChanges(pageToken) {
	const res = await drive.changes.list({
		pageToken,
		fields:
			"nextPageToken,newStartPageToken,changes(fileId,removed,file(id,name,mimeType,md5Checksum,modifiedTime,parents))",
	});

	console.log(res.data);
}

getChanges(getStartToken());

// export async function getFilesInFolder(folderId) {
// 	const drive = google.drive({ version: "v3", auth });

// 	try {
// 		const list = await drive.files.list({
// 			q: `'${folderId}' in parents and (mimeType contains 'image/')`,
// 			fields: "files(id,name)",
// 		});
// 		return list.data.files || [];
// 	} catch (err) {
// 		console.error("❌ Error reading Drive:", err.message || err);
// 		return [];
// 	}
// };