import { Client, Options } from "discord.js";
import { ConfigParams } from "../config/config";
export const bot = new Client({
    intents: []
});



bot.login(ConfigParams.BOT_KEY);


