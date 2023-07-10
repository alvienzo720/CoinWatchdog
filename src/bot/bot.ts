import { Client, Message, Options } from "discord.js";
import { ConfigParams } from "../config/config";
import { getCryptoPrices } from "../coins/crypto";

export const bot = new Client({
    intents: []
});
const cryptoSymbols = ['BNB', 'BTC', 'ETH', 'USDC', 'UNI'];

bot.on('message', async(message:Message)=>{
    if(message.content ==='!prices'){
        try {
            const prices =  await getCryptoPrices(cryptoSymbols);
            let response = "";
            for(const crypto of cryptoSymbols){
                response += `The current price of ${crypto} is $${prices[crypto]}\n`;
            }
            message.channel.send(response);
        } catch (error) {
            message.channel.send('An error occurred while fetching the prices.');
            
        }
    }
})

bot.login(ConfigParams.BOT_KEY);


