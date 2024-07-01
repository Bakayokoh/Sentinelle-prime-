module.exports = {
  config: {
    name: "uptime2",
    aliases: ["upt2", "up2"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot and check uptime."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const uptime = process.uptime();
      
      const days = Math.floor(uptime / 86400);
      const hours = Math.floor((uptime % 86400) / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `━━━━━━━━━━━━━━━━
⏳${hours} 𝗵𝗲𝘂𝗿𝘀 🕒
━━━━━━━━━━━━━━━━ 
⌛${minutes} 𝗺𝗶𝗻𝘂𝘁𝗲𝘀 🕒
━━━━━━━━━━━━━━━━️ 
⌛${seconds} 𝘀𝗲𝗰𝗼𝗻𝗱𝗲𝘀 🕒
━━━━━━━━━━━━━━━━`;
      
      api.sendMessage(`𝗦𝗘𝗡𝗧𝗜𝗡𝗘𝗟𝗟𝗘 𝗣𝗥𝗜𝗠𝗘~\n ${uptimeString}`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
}
