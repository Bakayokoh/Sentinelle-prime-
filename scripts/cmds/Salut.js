 module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝘀𝗮𝗹𝘂𝘁 𝗷𝗲 𝘀𝘂𝗶𝘀 𝘁𝗼𝗻 𝗮𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁 𝘃𝗶𝗿𝘁𝘂𝗲𝗹 𝗽𝗿𝗲̂𝘁 𝗮̀ 𝗿𝗲́𝗽𝗼𝗻𝗱𝗿𝗲 𝗮̀ 𝘁𝗼𝘂𝘁𝗲𝘀 𝘁𝗲𝘀 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 ");
}
};
