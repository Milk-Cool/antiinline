import "dotenv/config";
import { Telegraf } from "telegraf";

const allowed = ["wiki", "vid", "pic", "gif"];

const bot = new Telegraf(process.env.TOKEN!);
bot.on("message", ctx => {
    if("via_bot" in ctx.message && ctx.message.via_bot && !allowed.includes(ctx.message.via_bot.username!))
        bot.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
});

bot.launch();