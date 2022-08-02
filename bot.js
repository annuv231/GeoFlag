import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
// import "./jokes.json";
import jokes from "./jokes.js";
// import "./deploy-commands.js";
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply("Server info.");
  } else if (commandName === "user") {
    await interaction.reply("User info.");
  } else if (commandName === "boomer") {
    await interaction.reply("Ok boomer");
  } else if (commandName === "dadjoke") {
    const random = Math.floor(Math.random() * 18);
    const joke = jokes.joke[random];
    await interaction.reply(random + ":" + joke);
  }
});
// Login to Discord with your client's token
client.login(process.env.TOKEN);
