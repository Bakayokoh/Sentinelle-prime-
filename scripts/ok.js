module.exports = {
    config: {
        name: "Ok",
        version: "1.0",
        author: "Jaychris Garcia",
        countDown: 1,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "ok") return message.reply("𝗼𝗻𝘁 𝗻'𝗲𝘀𝘁 𝗱'𝗮𝗰𝗰𝗼𝗿𝗱 𝗾𝘂𝗲 𝗹𝗮 𝗡𝗔𝗦𝗔 𝗲𝘀𝘁 𝗹𝗮 𝗺𝗲𝗶𝗹𝗹𝗲𝘂𝗿𝗲 𝗮𝗴𝗲𝗻𝗰𝗲 𝘀𝗽𝗮𝘁𝗶𝗮𝗹𝗲");
}
};
