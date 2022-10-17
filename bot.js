const { Telegraf } = require("telegraf");
const request = require("request");

const token = "" // siz shu string ichiga botfather orqali yaratilgan bot tokenini qo'yasiz!

const bot = new Telegraf(token)


bot.command("start", async (ctx) => {
    await ctx.replyWithHTML(`Hi, please send instagram video url!`)
})


bot.on("message", async (ctx) => {
    const link = ctx.update.message.text
    llink = link.split('')
    if (llink[0] === "h", llink[1] === "t", llink[2] === "t", llink[3] === "p", llink[4] === "s",llink[5] === ":", llink[6] === "/", llink[7] === "/", llink[8] === "w", llink[9] === "w",llink[10] === "w", llink[11] === ".", llink[12] === "i", llink[13] === "n", llink[14] === "s", llink[15] === "t",llink[16] === "a", llink[17] === "g", llink[18] === "r", llink[19] === "a", llink[20] === "m") {
        const options = {
        method: 'GET',
        url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
        qs: {url: link},
        headers: {
            'X-RapidAPI-Key': '', // '' ushbu string ichiga siz rapidapi.com orqali olgan api ni qoyasiz, api shu ko'rinishda bo'ladi - 0390edd038msh43715b569645b4c1bb1a7jsn5093b1f63
            'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
            useQueryString: true
        }
        };
    
        request(options, async function (error, response, body) {
            if (error) throw new Error(error);
            const data = JSON.parse(body)
            // console.log(data.video);
            await ctx.telegram.sendVideo(ctx.chat.id, `${data.video}`)
    
        });
    } else {
        await ctx.replyWithHTML(`Please enter valid url!`)
    }
})

bot.launch().then(() => {
    console.log("Bot started...")
})