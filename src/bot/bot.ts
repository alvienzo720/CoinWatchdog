import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import { ConfigParams } from "../config/config";



// Defining Slash Commands
const commands = [
    {
        name: "ping",
        description: "Replies with Pong!"
        
    },
    {
        name: 'hello',
        description: 'Replies with Hello Your name'
    }
];

const rest = new REST({ version: '10' }).setToken(ConfigParams.BOT_KEY);

// Function to create commands
async function createCommands() {
    try {
        await rest.put(Routes.applicationCommands(ConfigParams.APP_ID), { body: commands });
    } catch (error) {
        console.error('Error while creating commands: ', error);
    }
}

createCommands()


export const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user?.username}!`);
})


bot.on('interactionCreate', async Interaction => {
    if (!Interaction.isChatInputCommand()) return;

    if (Interaction.commandName === 'ping') {
        await Interaction.reply("Hello World we can start off!");
    }
});

bot.on('interactionCreate', async sayhello =>{
    if(!sayhello.isChatInputCommand()) return;

    if(sayhello.commandName === 'hello'){
        await sayhello.reply(`Hello ${bot.user?.username}`)

    }
} )
bot.login(ConfigParams.BOT_KEY);
