module.exports = {
	config: {
		name: "sentinelle",
		aliases: ["prime"],
		version: "1.0",
		author: "Bakayoko hamed ", // do not change this credits
		countDown: 5,
		role: 2,
		shortDescription: "send you pic of Shisui",
		longDescription: "sends u pic of Shisui",
		category: "meme",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/Qf7Zkfp/image.jpg",
"https://i.ibb.co/5G14C6h/image.jpg",
"https://i.ibb.co/jTF41jr/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '✨𝗦𝗘𝗡𝗧𝗜𝗡𝗘𝗟 𝗣𝗥𝗜𝗠𝗘 ✨',attachment: await global.utils.getStreamFromURL(img)
})
}
  }
