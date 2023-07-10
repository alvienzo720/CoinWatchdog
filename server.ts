import express from "express";
import { bot } from "./src/bot/bot";

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
bot.once('ready', () => {
    console.log("Bot is Ready!");
})


