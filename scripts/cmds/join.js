module.exports = {
  config: {
    name: "join",
    aliases: ['addme', 'joinme'],
    version: "1.0",
    author: "Samir B. Thakuri",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Add user to support group",
    },
    longDescription: {
      en: "This command adds the user to the group wher bot exist",
    },
    category: "owner",
    guide: {
      en: "To use this command, simply type !join <threadID>.",
    },
  },

  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = args[0];
    if (!supportGroupId) {
      api.sendMessage("𝗣𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝘁𝗲𝗿 𝗜𝗗 𝘁𝗵𝗲𝗻 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻
.", event.threadID);
      return;
    }
    const threadID = event.threadID;
    const userID = event.senderID;
    const threadInfo = await api.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      api.sendMessage(
        "𝗬𝗼𝘂 𝗮𝗿𝗲 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗶𝗻 𝘁𝗵𝗲 𝗴𝗿𝗼𝘂𝗽 𝗶𝗳 𝘆𝗼𝘂 𝗰𝗮𝗻'𝘁 𝗳𝗶𝗻𝗱 𝗶𝘁 𝗽𝗹𝗲𝗮𝘀𝗲 𝗰𝗵𝗲𝗰𝗸 𝘆𝗼𝘂𝗿 𝘀𝗽𝗮𝗺 𝗯𝗼𝘅",
        threadID
      );
    } else {
      api.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("🔴| Failed to add user to support group:", err);
          api.sendMessage("𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘁 𝗳𝗼𝘂𝗻𝗱 𝗽𝗹𝗲𝗮𝘀𝗲 𝗮𝗱𝗱 𝗺𝗲 𝘁𝗵𝗲𝗻 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻
🚶", threadID);
        } else {
          api.sendMessage(
            "𝗕𝗢𝗦𝗦.. 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗮𝗱𝗱𝗲𝗱 𝘁𝗼 𝘁𝗵𝗲 𝗴𝗿𝗼𝘂𝗽 🟢.",
            threadID
          );
        }
      });
    }
  },
}
