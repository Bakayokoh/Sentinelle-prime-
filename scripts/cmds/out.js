const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "Out",
		aliases: ["l","go"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('▣𝗛𝗔𝗠𝗘𝗗 𝗕𝗢𝗧:\n》𝙼𝚈 𝚂𝚄𝙲𝙲𝙴𝚂𝚂 𝙸𝚂 𝙸𝙽𝙴𝚅𝙸𝚃𝙰𝙱𝙻𝙴, 𝙱𝙴𝙲𝙰𝚄𝚂𝙴 𝙸 𝙰𝙼 𝙳𝙴𝚂𝚃𝙸𝙽𝙴𝙳 𝚃𝙾 𝙱𝙴 𝙰𝚃 𝚃𝙷𝙴 𝚃𝙾𝙿.\n\n➤𝗕𝗘𝗬 𝗟𝗘𝗦 𝗡𝗔𝗭𝗘𝗦', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
