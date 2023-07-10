import { Client, Options } from "discord.js";
import { ConfigParams } from "../config/config";
const bot = new Client({
    intents: []
});

bot.once('ready', () => {
    console.log("Bot is Ready!");
})

bot.login(ConfigParams.BOT_KEY);


